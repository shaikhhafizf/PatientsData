import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUs from "./screens/AboutUs";
import ManagePatientStackNavigator from "./screens/ManagePatientStackNavigator";

const Drawer = createDrawerNavigator();

export default (props) => {
  return (
    <Drawer.Navigator initialRouteName="Patients Navigation">
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Patients Navigation"
        component={ManagePatientStackNavigator}
      />
      <Drawer.Screen name="About Us" component={AboutUs} />
    </Drawer.Navigator>
  );
};
