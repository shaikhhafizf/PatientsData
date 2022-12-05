import React, { Component } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateField from "react-native-datefield";
import { addNewPatients, getPatients, updatePatient } from "../API";
import commonStyles from "../styles/common";
import theme from "../styles/theme";

export default class AddOrUpdatePatientDetails extends Component {
  constructor(props) {
    super(props);
    const routeProps = this.props.route?.params?.data;
    this.state = {
      firstName: routeProps?.firstName ? routeProps?.firstName : "",
      lastName: routeProps?.lastName ? routeProps.lastName : "",
      age: routeProps?.age ? routeProps.age : "",
      gender: routeProps?.gender ? routeProps.gender : "",
      DOB: routeProps?.dob
        ? new Date(
            `${routeProps.dob.split("-")[2]}-${routeProps.dob.split("-")[1]}-${
              routeProps.dob.split("-")[0]
            }`
          )
        : "",
      emailAddress: routeProps?.email ? routeProps.email : "",
      phoneNumber: routeProps?.phoneNumber ? routeProps.phoneNumber : "",
      address: routeProps?.Address ? routeProps.Address : "",
      open: false,
    };
  }
  addPatient = () => {
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.age &&
      this.state.gender &&
      this.state.DOB &&
      this.state.emailAddress &&
      this.state.phoneNumber &&
      this.state.address
    ) {
      if (
        !/^[a-zA-Z0-9]{6,}@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(
          this.state.emailAddress
        )
      ) {
        Alert.alert("Invalid Email", "please enter valid email");
        return;
      }
      if (!/^[0-9]{10}$/.test(this.state.phoneNumber)) {
        Alert.alert("Invalid phone number", "please enter valid phone number");
        return;
      }
      var data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        gender: this.state.gender,
        dob: `${this.state.DOB.getFullYear()}-${this.state.DOB.getMonth()}-${this.state.DOB.getDate()}`,
        email: this.state.emailAddress,
        phoneNumber: this.state.phoneNumber,
        Address: this.state.address,
      };
      if (this.props.route.params.data?.id) {
        data.id = this.props.route.params.data.id;
        updatePatient(data)
          .then((res) => {
            console.log("success", res);
            if (res.data.error) {
              Alert.alert(res.data.error);
            } else {
              Alert.alert("successfully updated patient", "", [
                {
                  text: "Okay",
                  onPress: () => this.props.navigation.navigate("Patients"),
                },
              ]);
            }
          })
          .catch((e) => {
            console.log("err", e);
          });
        return;
      }
      addNewPatients(data)
        .then((res) => {
          console.log("success", res);
          if (res.data.error) {
            Alert.alert(res.data.error);
          } else {
            Alert.alert("successfully added new patient", "", [
              {
                text: "Okay",
                onPress: () => this.props.navigation.goBack(),
              },
            ]);
          }
        })
        .catch((e) => {
          console.log("err", e);
        });
    } else {
      if (!this.state.firstName) {
        Alert.alert("First Name missing", "please enter patient First Name");
      } else if (!this.state.lastName) {
        Alert.alert("Last Name missing", "please enter patient Last Name");
      } else if (!this.state.age) {
        Alert.alert("Age missing", "please enter patient Age");
      } else if (!this.state.gender) {
        Alert.alert("Gender missing", "please enter patient gender");
      } else if (!this.state.DOB) {
        Alert.alert("please enter patient Birth date");
      } else if (!this.state.emailAddress) {
        Alert.alert(
          "email Address missing",
          "please enter patient Email Address"
        );
      } else if (!this.state.phoneNumber) {
        Alert.alert(
          "Phone number missing",
          "please enter patient Phone Number"
        );
      } else if (!this.state.address) {
        Alert.alert("address missing", "please enter patient Address");
      }
    }
  };
  setBirthdayAndAge = (date) => {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log(date, age);
    this.setState({ DOB: date, age: age.toString() });
  };
  render() {
    const today = new Date();
    return (
      <View style={styles.mainContainer}>
        <Text style={commonStyles.textButton}>Enter your first name*</Text>
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ firstName: txt })}
          value={this.state.firstName}
          placeholder="First Name"
        />
        <Text style={commonStyles.textButton}>Enter your last name*</Text>
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ lastName: txt })}
          value={this.state.lastName}
          placeholder="Last Name"
        />
        <Text style={commonStyles.textButton}>Enter your date of birth*</Text>
        <DateField
          styleInput={styles.dateFieldStyle}
          containerStyle={styles.dateFieldContainer}
          styleInputYear={styles.yearFieldStyle}
          defaultValue={this.state.DOB}
          maximumDate={new Date()}
          minimumDate={new Date(1800, 12, 31)}
          onSubmit={this.setBirthdayAndAge}
          handleErrors={() =>
            Alert.alert(
              "Invalid Birth date",
              "please enter date before today or today"
            )
          }
        />
        <Text style={commonStyles.textButton}>Enter your Age and Gender*</Text>
        <View style={styles.twoField}>
          <TextInput
            style={styles.ageField}
            onChangeText={(txt) => this.setState({ age: txt })}
            value={this.state.age}
            keyboardType="numeric"
            editable={false}
            placeholder="Age"
          />
          <TextInput
            style={styles.genderField}
            onChangeText={(txt) => this.setState({ gender: txt })}
            value={this.state.gender}
            placeholder="Gender"
          />
        </View>
        {/* <TextInput
          editable={false}
          style={commonStyles.textField}
          onPressIn={() => {
            this.setState({ open: true });
          }}
          value={this.state.DOB}
          placeholder="Date Of Birth"
        /> */}
        {/* <DatePicker
          date={this.state.DOB}
          onDateChange={(d) => this.setState({ DOB: d })}
        /> */}
        <Text style={commonStyles.textButton}>Enter your email address*</Text>
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ emailAddress: txt })}
          value={this.state.emailAddress}
          placeholder="Email Address"
        />
        <Text style={commonStyles.textButton}>Enter your phone number*</Text>
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ phoneNumber: txt })}
          value={this.state.phoneNumber}
          placeholder="Phone number"
        />
        <Text style={commonStyles.textButton}>Enter your address*</Text>
        <TextInput
          style={styles.addressField}
          onChangeText={(txt) => this.setState({ address: txt })}
          value={this.state.address}
          placeholder="Address"
        />
        <TouchableOpacity
          style={commonStyles.submitButton}
          onPress={this.addPatient}
        >
          <Text style={commonStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    ...commonStyles.mainContainer,
    paddingTop: 32,
  },
  twoField: {
    width: "100%",
    flexDirection: "row",
  },
  ageField: {
    ...commonStyles.textField,
    width: "25%",
    marginRight: "5%",
  },
  genderField: {
    ...commonStyles.textField,
    width: "70%",
  },
  addressField: {
    ...commonStyles.textField,
    height: "auto",
    minHeight: 80,
    paddingTop: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  dateFieldStyle: {
    ...commonStyles.textField,
    width: "30%",
    borderRadius: 8,
    paddingHorizontal: 25,
    justifyContent: "space-between",
    marginRight: "5%",
  },
  yearFieldStyle: {
    ...commonStyles.textField,
    width: "30%",
    borderRadius: 8,
    paddingHorizontal: 25,
    justifyContent: "space-between",
    marginRight: 0,
  },
});
