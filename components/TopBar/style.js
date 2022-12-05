import { StyleSheet } from "react-native";
import theme from "../../styles/theme";

export default styles = StyleSheet.create({
  topBarContainer: {
    zIndex: 999,
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 48,
    paddingBottom: 16,
    flexDirection: "row",
    backgroundColor: theme.DarkBlue,
    alignItems: "center",
    overflow: "visible",
    justifyContent: "center",
  },
  backButton: {
    width: 40,
    marginRight: 16,
  },
  backButtonIcon: {
    resizeMode: "center",
  },
  recipientDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textDetails: {
    flex: 1,
    justifyContent: "center",
  },
  recipientName: {
    fontSize: theme.FontM,
    fontWeight: theme.WeightR,
    color: theme.white,
  },
  recipientLastSeen: {
    fontSize: theme.FontS,
    fontWeight: theme.WeightSB,
    color: theme.DarkBlue,
  },
});
