import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUs from "./screens/AboutUs";
import ViewPatients from "./screens/ViewPatients";

const Drawer = createDrawerNavigator();

export default (props) => {
  return (
    <Drawer.Navigator initialRouteName="Patients">
      <Drawer.Screen name="Patients" component={ViewPatients} />
      <Drawer.Screen name="About Us" component={AboutUs} />
    </Drawer.Navigator>
  );
};
