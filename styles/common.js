import { StyleSheet } from "react-native";
import theme from "./theme";

const commonStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.white,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textButton: {
    fontSize: theme.FontS,
    padding: 8,
    color: "#023E73",
    fontWeight: theme.WeightB,
    fontSize: theme.FontS,
  },
  addFloatingButton: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: "5%",
    right: 16,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.DarkBlue,
  },
  addIcon: {
    fontSize: 40,
    fontWeight: theme.WeightR,
    color: theme.white,
  },
  listContainer: {
    width: "100%",
  },
  bold: {
    fontWeight: theme.WeightB,
  },
  smallText: {
    fontSize: theme.FontS,
  },
  textField: {
    width: "100%",
    height: 40,
    paddingLeft: 16,
    marginBottom: 8,
    fontSize: theme.FontS,
    backgroundColor: theme.lightBlue,
    color: theme.DarkBlue,
    borderRadius: 8,
  },
  fieldText: {
    textAlign: "left",
    fontSize: theme.FontXS,
    color: theme.DarkBlue,
  },
  placeHolder: {
    textAlign: "left",
    fontSize: theme.FontXS,
    color: theme.DarkBlue,
    opacity: 0.6,
  },
  submitButton: {
    width: "100%",
    height: 48,
    marginTop: 24,
    backgroundColor: theme.DarkBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  buttonText: {
    fontSize: theme.FontM,
    color: theme.white,
  },
});
export default commonStyles;
