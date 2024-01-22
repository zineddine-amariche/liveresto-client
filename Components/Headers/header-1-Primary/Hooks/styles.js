import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../Styles/theme";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.Blanc,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width: "100%",
    zIndex:100
  },
  Right: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
    flex: 1,
    paddingRight: 20,
  },
  Button: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  TextTitle: {
    fontWeight: "700",
    color: COLORS.Noir,
  },
  renitialisation: {
    color: COLORS.Vert2,
    marginRight: 15,
  },
});
export default styles;
