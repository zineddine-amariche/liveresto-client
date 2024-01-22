import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Gris,
    width:"100%",
    marginVertical:10,
    padding:10
  },
  BoxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  Space: {
    height: 20,
  },
});

export default styles;
