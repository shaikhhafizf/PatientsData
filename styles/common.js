import { StyleSheet } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ff0",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textButton: {
    fontSize: 12,
    color: "#023E73",
    fontWeight: theme.WeightB,
    fontSize: theme.FontS,
  },
});
export default styles;
