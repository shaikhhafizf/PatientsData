import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ViewPatients from "./ViewPatients";
import ViewPatientRecords from "./ViewPatientRecords";
import ManagePatient from "./ManagePatient";
import { Image, StyleSheet, Text, View } from "react-native";
import commonStyles from "../styles/common";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../styles/theme";
import AddOrUpdatePatientDetails from "./AddOrUpdatePatientDetails";
import AddOrUpdatePatientRecord from "./AddOrUpdatePatientRecord";

const headerStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.DarkBlue,
  },
  title: {
    ...commonStyles.fontL,
  },
  menuBtn: {
    paddingLeft: 20,
    marginRight: 16,
  },
  morePopup: {
    top: 20,
    right: 0,
    width: 144,
    flexDirection: "column",
    backgroundColor: "#00a",
    borderRadius: 4,
  },
  morePopupRow: {
    ...commonStyles.textButton,
    marginBottom: 16,
  },
  deleteBtn: {
    ...commonStyles.textButton,
    color: "#FF1E1E",
  },
});

const Stack = createStackNavigator();
export default ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitleContainerStyle: headerStyle.title,
        headerTitle: `${
          route.params && route.params.title ? route.params.title : ""
        }`,
        headerStyle: {
          backgroundColor: theme.DarkBlue,
        },
        headerTintColor: "#fff",
        headerLeft: () => (
          <TouchableOpacity
            style={headerStyle.menuBtn}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require("../assets/icons/arrow.png")} />
          </TouchableOpacity>
        ),
      })}
      initialRouteName="Patients"
    >
      <Stack.Screen
        options={{
          headerTitle: "Patients",
          headerLeft: () => (
            <TouchableOpacity
              style={headerStyle.menuBtn}
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <Image source={require("../assets/icons/menu.png")} />
            </TouchableOpacity>
          ),
        }}
        name="Patients"
        component={ViewPatients}
      />
      <Stack.Screen
        options={{
          headerRight: () => (
            <View>
              <TouchableOpacity
                style={headerStyle.menuBtn}
                onPress={() => {
                  console.log("more...");
                }}
              >
                <Image source={require("../assets/icons/more-vertical.png")} />
                {/* <View style={headerStyle.morePopup}>
                  <Text style={headerStyle.morePopupRow}>View Records</Text>
                  <Text style={headerStyle.morePopupRow}>Update</Text>
                  <Text style={headerStyle.morePopupRow}>Delete</Text>
                </View> */}
              </TouchableOpacity>
            </View>
          ),
        }}
        name="Manage Patients"
        component={ManagePatient}
      />
      <Stack.Screen name="Patient Records" component={ViewPatientRecords} />
      <Stack.Screen
        name="Add or update Patient Details"
        component={AddOrUpdatePatientDetails}
      />
      <Stack.Screen
        name="Add or update Patient Record"
        component={AddOrUpdatePatientRecord}
      />
    </Stack.Navigator>
  );
};
