import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../../../../Components/Styles/theme";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  ItemBox: {
    width: width / 4,
    alignItems: "center",
    justifyContent: "center",
  },

  Item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  T2: {
    color: COLORS.Noir,
    fontWeight: "700",
  },
});

export default styles;
