import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import theme from "../styles/theme";
import commonStyles from "../styles/common";

export default (props) => {
  console.log(props.data);
  return (
    <View style={styles.boxContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>FirstName LastName</Text>
        <View style={styles.otherDetails}>
          <Text style={commonStyles.smallText}>
            Gender: <Text style={commonStyles.bold}>Male</Text>
          </Text>
          <Text style={commonStyles.smallText}>
            Age: <Text style={commonStyles.bold}>55 yrs</Text>
          </Text>
        </View>
      </View>
      <Text style={commonStyles.textButton}>Manage Records</Text>
    </View>
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
  },
  otherDetails: {
    width: "100%",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
