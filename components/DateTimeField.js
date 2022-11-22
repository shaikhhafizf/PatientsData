import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import commonStyles from "../styles/common";
import theme from "../styles/theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default (props) => {
  const defaultDate = new Date();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    props.onChange(date);
    hideDatePicker();
  };
  const convertDateToString = (val) => {
    var interval = "AM";
    var hour = val.getHours();
    if (hour > 11) {
      interval = "PM";
      hour = hour - 12;
    }
    return `${
      hour == 0 ? 12 : hour
    }:${val.getMinutes()} ${interval} ${val.getDate()}-${
      val.getMonth() + 1
    }-${val.getFullYear()}`;
  };
  return (
    <View style={styles.container}>
      {props.value ? (
        <Text style={styles.field} onPress={showDatePicker}>
          {convertDateToString(new Date(props.value))}
        </Text>
      ) : (
        <Text style={styles.placeholder} onPress={showDatePicker}>
          {props.placeholder}
        </Text>
      )}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={props.mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%" },
  field: {
    width: "100%",
    height: 40,
    paddingLeft: 16,
    marginBottom: 8,
    fontSize: theme.FontS,
    backgroundColor: theme.lightBlue,
    color: theme.DarkBlue,
    borderRadius: 8,
    textAlignVertical: "center",
  },
  placeholder: {
    width: "100%",
    height: 40,
    paddingLeft: 16,
    marginBottom: 8,
    fontSize: theme.FontS,
    backgroundColor: theme.lightBlue,
    color: theme.dullBlue,
    borderRadius: 8,
    textAlignVertical: "center",
  },
});
