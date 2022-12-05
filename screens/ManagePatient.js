import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "../components/TopBar";
import commonStyles from "../styles/common";
import theme from "../styles/theme";

export default (props) => {
  const data = props.route.params.data;
  return (
    <View style={styles.wrapperContainer}>
      <TopBar
        navigation={props.navigation}
        name={`${data.firstName} ${data.LastName ? data.LastName : ""}`}
        data={data}
      />
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
            <Text style={styles.dataText}>
              {data.firstName} {data.LastName}
            </Text>
            <Text style={styles.dataText}>{data.age} yrs</Text>
            <Text style={styles.dataText}>{data.dob}</Text>
            <Text style={styles.dataText}>{data.gender}</Text>
            <Text style={styles.dataText}>{data.email}</Text>
            <Text style={styles.dataText}>{data.phoneNumber}</Text>
            <Text style={styles.dataText}>{data.Address}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
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
    maxWidth: "80%",
    marginBottom: 16,
    fontSize: theme.FontM,
    fontWeight: theme.WeightSB,
    color: theme.DarkBlue,
  },
});
