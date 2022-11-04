import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import commonStyles from "../styles/common";
import theme from "../styles/theme";

export default class ViewPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      sortBy: "Name",
    };
  }
  onChangeSearchText = () => {
    console.log("Typing...");
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
        <View></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  filtersContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBox: {
    flex: 1,
    padding: 16,
    paddingBottom: 8,
    paddingTop: 8,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.lightBlue,
    color: theme.dullBlue,
    borderRadius: 18,
  },
});
