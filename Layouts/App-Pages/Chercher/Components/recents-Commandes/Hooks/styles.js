import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Gris,
    width:"100%",
    marginVertical:10,
    padding:30
  },

  Space: {
    height: 10,
  },
  BoxCol: { alignSelf: "center", width: "100%", alignItems: "center" },
});

export default styles;
