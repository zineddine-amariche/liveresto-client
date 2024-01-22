import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../Components/Styles/theme";
const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#eee",
  },
  image: {
    alignSelf: "center",
  },
  Text: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
    position: "absolute",
    bottom: 125,
    alignSelf: "center",
  },
  logo: {
    alignSelf: "center",
    position: "absolute",
    bottom: 25,
  },
  BoxLoader: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  BoxT: {
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    alignSelf: "center",
  },
  TextBody: {
    textAlign: "center",
    color:COLORS.Blanc
  },
});
