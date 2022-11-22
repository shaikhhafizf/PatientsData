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
import { getPatientRecords } from "../API";
import { FlatList } from "react-native-gesture-handler";

export default class ViewPatientRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
      sortBy: "Name",
    };
  }
  refresh = () => {
    const { route } = this.props;
    getPatientRecords(route.params.data.id)
      .then((res) => {
        this.setState({ records: res.data });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("focus", () => {
      // call your refresh method here
      this.refresh();
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    if (this.focusListener != null && this.focusListener.remove) {
      this.focusListener.remove();
    }
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
          <FlatList
            data={this.state.records}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <PatientRecordCard
                data={item}
                navigation={this.props.navigation}
                refresh={this.refresh}
              />
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Add or update Patient Record", {
              title: "Add New Patient Record",
              data: {},
              patientId: this.props.route.params.data.id,
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
