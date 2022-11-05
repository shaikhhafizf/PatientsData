import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import commonStyles from "../styles/common";
import theme from "../styles/theme";

export default (props) => {
  return (
    <View style={commonStyles.mainContainer}>
      <View style={styles.detailBox}>
        <View style={styles.labelRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.label}>Email Address:</Text>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.label}>Address:</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.dataText}>Hafiz Shaikh</Text>
          <Text style={styles.dataText}>21 yrs</Text>
          <Text style={styles.dataText}>12-09-2001</Text>
          <Text style={styles.dataText}>Male</Text>
          <Text style={styles.dataText}>shaikhhafiz@gmail.com</Text>
          <Text style={styles.dataText}>7475689563</Text>
          <Text style={styles.dataText}>
            554 eglinton road, scarborogh, M1J3C5
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailBox: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    backgroundColor: theme.lightBlue,
    borderRadius: 8,
  },
  labelRow: {
    marginRight: 8,
  },
  label: {
    marginBottom: 16,
    fontSize: theme.FontM,
    color: theme.DarkBlue,
  },
  dataText: {
    maxWidth: "90%",
    marginBottom: 16,
    fontSize: theme.FontM,
    fontWeight: theme.WeightSB,
    color: theme.DarkBlue,
  },
});
