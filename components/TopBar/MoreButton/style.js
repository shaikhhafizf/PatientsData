import { StyleSheet } from "react-native";
import theme from "../../../styles/theme";

export default styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    resizeMode: "center",
  },
  dropDown: {
    flex: 1,
    position: "absolute",
    top: 22,
    right: 16,
    zIndex: 1000,
    minWidth: 128,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 4,
    backgroundColor: theme.white,
    overflow: "visible",
  },
  menuItem: {
    padding: 8,
  },
  menuItemText: {
    fontWeight: theme.WeightM,
    fontSize: theme.FontS,
    color: theme.dullBlue,
  },
});
