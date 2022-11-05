import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import commonStyles from "../styles/common";
import theme from "../styles/theme";
import PatientRecordCard from "../components/PatientRecordCard";

export default class ViewPatientRecords extends Component {
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
            placeholder="Search"
          />
          <Text style={commonStyles.textButton}>Sort</Text>
        </View>
        <View style={commonStyles.listContainer}>
          <PatientRecordCard
            data={{
              dataType: "Blood presure",
              value: "114/74 mm Hg",
              time: "22",
              description: "kdjfakdka",
            }}
            navigation={this.props.navigation}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Add or update Patient Record", {
              title: "Add New Patient Record",
            });
          }}
          style={commonStyles.addFloatingButton}
        >
          <Text style={commonStyles.addIcon}>+</Text>
        </TouchableOpacity>
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
    fontSize: theme.FontS,
  },
});
