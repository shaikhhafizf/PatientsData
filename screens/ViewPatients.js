import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import commonStyles from "../styles/common";
import theme from "../styles/theme";
import PatientCard from "../components/PatientCard";
import { getPatients } from "../API";

export default class ViewPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      sortBy: "Name",
      patients: [],
    };
  }
  componentDidMount() {
    getPatients()
      .then((res) => {
        this.setState({ patients: res.data });
      })
      .catch((err) => console.log(err));
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
        <ScrollView style={commonStyles.listContainer}>
          <FlatList
            data={this.state.patients}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <PatientCard data={item} navigation={this.props.navigation} />
            )}
          />
        </ScrollView>
        <TouchableOpacity
          style={commonStyles.addFloatingButton}
          onPress={() => {
            this.props.navigation.navigate("Add or update Patient Details", {
              title: "Add New Patient Details",
            });
          }}
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
    paddingBottom: 8,
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
