import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { addPatientRecord, updatePatientRecords } from "../API";
import DateTimeField from "../components/DateTimeField";
import commonStyles from "../styles/common";

export default class AddOrUpdatePatientRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: this.props.route.params.data.type
        ? this.props.route.params.data.type
        : "",
      value: this.props.route.params.data.value
        ? this.props.route.params.data.value
        : "",
      dateTime: this.props.route.params.data.dateTime
        ? this.props.route.params.data.dateTime
        : "",
      description: this.props.route.params.data.description
        ? this.props.route.params.data.description
        : "",
      showTimePicker: false,
    };
  }
  submitRecord = () => {
    var data = {
      dateTime: this.state.dateTime,
      type: this.state.dataType,
      value: this.state.value,
      description: this.state.description,
    };
    if (this.props.route.params.data.id) {
      data.id = this.props.route.params.data.id;
      updatePatientRecords(data)
        .then((res) => {
          if (res.data.error) {
            Alert.alert(res.data.error);
          } else {
            Alert.alert("successfully updated patient record", "", [
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
      data.patientId = this.props.route.params.patientId;
      addPatientRecord(data)
        .then((res) => {
          if (res.data.error) {
            Alert.alert(res.data.error);
          } else {
            Alert.alert("successfully added new patient record", "", [
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
    }
  };
  render() {
    var dataTypes = [
      "Blood Pressure (X/Y mmHg)",
      "Respiratory Rate (X/min)",
      "Blood Oxygen Level (X%)",
      "Heartbeat Rate (X/min)",
    ];
    return (
      <View style={styles.mainContainer}>
        <SelectDropdown
          data={dataTypes}
          buttonStyle={commonStyles.textField}
          buttonTextStyle={commonStyles.fieldText}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem);
            this.setState({ dataType: selectedItem });
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          defaultButtonText={
            this.state.dataType ? this.state.dataType : "Data Type"
          }
          placeholder="Data Type"
        />
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ value: txt })}
          value={this.state.value}
          placeholder="Value"
        />

        <DateTimeField
          mode={"datetime"}
          onChange={(value) => {
            this.setState({ dateTime: value });
          }}
          value={this.state.dateTime}
          placeholder="Date & Time"
        />
        <TextInput
          style={styles.descriptionField}
          onChangeText={(txt) => this.setState({ description: txt })}
          value={this.state.description}
          placeholder="Description"
        />
        <TouchableOpacity
          style={commonStyles.submitButton}
          onPress={this.submitRecord}
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
  descriptionField: {
    ...commonStyles.textField,
    height: "auto",
    minHeight: 80,
    paddingTop: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
});
