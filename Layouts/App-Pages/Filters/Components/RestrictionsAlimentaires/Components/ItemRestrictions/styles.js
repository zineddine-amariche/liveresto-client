import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.Gris,
    padding: 20,
  },
  T1: {
    color: COLORS.Noir,
    fontWeight: "700",
  },
  T2: {
    color: COLORS.Noir,
  },
  space: {
    height: 20,
  },
  List: {},
  Item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
  },

});

export default styles;
