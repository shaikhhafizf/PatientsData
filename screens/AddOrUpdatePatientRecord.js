import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyles from "../styles/common";

export default class AddOrUpdatePatientRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: "",
      value: "",
      time: "",
      description: "",
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ dataType: txt })}
          value={this.state.dataType}
          placeholder="Data Type"
        />
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ value: txt })}
          value={this.state.value}
          placeholder="Value"
        />
        <TextInput
          style={commonStyles.textField}
          onChangeText={(txt) => this.setState({ time: txt })}
          value={this.state.time}
          placeholder="Time"
        />
        <TextInput
          style={styles.descriptionField}
          onChangeText={(txt) => this.setState({ description: txt })}
          value={this.state.description}
          placeholder="Description"
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
