import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../../Components/Styles/theme";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    height: 36,
    backgroundColor: COLORS.Blanc,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal:3
  },
});
