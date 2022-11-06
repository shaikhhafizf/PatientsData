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
        <Text style={styles.name}>
          {props.data.firstName} {props.data.lastName}
        </Text>
        <View style={styles.otherDetails}>
          <Text style={styles.gender}>
            Gender: <Text style={commonStyles.bold}>{props.data.gender}</Text>
          </Text>
          <Text style={commonStyles.smallText}>
            Age: <Text style={commonStyles.bold}>{props.data.age} yrs</Text>
          </Text>
        </View>
      </View>
      <Text
        style={commonStyles.textButton}
        onPress={() => {
          props.navigation.navigate("Patient Records", {
            title: "Patient Records",
            data: props.data,
          });
        }}
      >
        Manage Records
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    padding: 16,
    backgroundColor: theme.lightBlue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    marginTop: 16,
  },
  detailsContainer: {
    minWidth: 200,
    maxWidth: "50%",
  },
  name: {
    width: "100%",
    fontSize: theme.FontM,
    fontWeight: theme.WeightM,
  },
  otherDetails: {
    width: "100%",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  gender: {
    ...commonStyles.smallText,
    width: 100,
  },
});
