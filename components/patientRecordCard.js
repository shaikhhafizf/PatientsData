import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../styles/theme";
import commonStyles from "../styles/common";

export default (props) => {
  return (
    <TouchableOpacity
      style={styles.boxContainer}
      onPress={() => {
        props.navigation.navigate("Manage Patients", {
          title: `${props.data.firstName} ${props.data.lastName}`,
          data: props.data,
        });
      }}
    >
      <View style={styles.detailsContainer}>
        <Text style={styles.dataValue}>
          {props.data.dataType}: {props.data.value}
        </Text>
        <Text style={commonStyles.smallText}>
          Time: <Text style={commonStyles.bold}>{props.data.time}</Text>
        </Text>
        <Text style={commonStyles.smallText}>{props.data.description}</Text>
      </View>
      <View style={styles.actionButtons}>
        <Text
          style={commonStyles.textButton}
          onPress={() => {
            console.log("manage");
          }}
        >
          Update
        </Text>
        <Text
          style={commonStyles.textButton}
          onPress={() => {
            console.log("manage");
          }}
        >
          Delete
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    padding: 16,
    backgroundColor: theme.lightBlue,
    borderRadius: 8,
    marginTop: 16,
  },
  dataValue: {
    width: "100%",
    fontSize: theme.FontM,
    fontWeight: theme.WeightM,
  },
  actionButtons: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gender: {
    ...commonStyles.smallText,
    width: 100,
  },
});
