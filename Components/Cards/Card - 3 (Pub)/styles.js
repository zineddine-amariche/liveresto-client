import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Styles/theme";

const styles = StyleSheet.create({
  container: {
    height: 110,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: 320,
    marginRight: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal:20,
    marginVertical:10,
    marginRight:20
  },
  BoxRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Space: {
    height: 20,
  },
  Left: {
    width: "60%",
  },
  TextL1: {
    color: COLORS.Blanc,
    fontWeight: "700",
  },
  Right: {
    width: "35%",
  },
  BoxBTN: {
    width: 85,
    height: 22,
  },
  Padding: {
    height: 10,
  },
});

export default styles;
