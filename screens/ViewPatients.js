import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import commonStyles from "../styles/common";
import theme from "../styles/theme";
import PatientCard from "../components/PatientCard";

export default class ViewPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      sortBy: "Name",
    };
  }
  onChangeSearchText = (keywords) => {
    if (keywords.length > 3) {
      console.log("fetching...", keywords);
    }
  };
  render() {
    return (
      <View style={commonStyles.mainContainer}>
        <View style={styles.filtersContainer}>
          <TextInput
            style={styles.searchBox}
            onChangeText={this.onChangeSearchText}
            value={this.searchKey}
          />
          <Text style={commonStyles.textButton}>Sort</Text>
        </View>
        <View style={commonStyles.listContainer}>
          <PatientCard />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  filtersContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBox: {
    height: 35,
    flex: 1,
    paddingLeft: 16,
    marginRight: 16,
    alignItems: "center",
    backgroundColor: theme.lightBlue,
    color: theme.dullBlue,
    borderRadius: 18,
  },
});
