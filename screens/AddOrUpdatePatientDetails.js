import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyles from "../styles/common";

export default class AddOrUpdatePatientDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      DOB: "",
      emailAddress: "",
      phoneNumber: "",
      address: "",
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ firstName: txt })}
          value={this.state.firstName}
          placeholder="First Name"
        />
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ lastName: txt })}
          value={this.state.lastName}
          placeholder="Last Name"
        />
        <View style={styles.twoField}>
          <TextInput
            style={styles.ageField}
            onChangeText={(txt) => this.setState({ age: txt })}
            value={this.state.age}
            placeholder="Age"
          />
          <TextInput
            style={styles.genderField}
            onChangeText={(txt) => this.setState({ gender: txt })}
            value={this.state.gender}
            placeholder="Gender"
          />
        </View>
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ DOB: txt })}
          value={this.state.DOB}
          placeholder="Date Of Birth"
        />
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ emailAddress: txt })}
          value={this.state.emailAddress}
          placeholder="Email Address"
        />
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ phoneNumber: txt })}
          value={this.state.phoneNumber}
          placeholder="Phone number"
        />
        <TextInput
          style={styles.addressField}
          onChangeText={(txt) => this.setState({ address: txt })}
          value={this.state.address}
          placeholder="Address"
        />
        <TouchableOpacity
          style={commonStyles.submitButton}
          onPress={() => console.log("click")}
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
});
