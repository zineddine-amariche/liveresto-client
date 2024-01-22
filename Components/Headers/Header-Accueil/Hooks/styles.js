import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../Styles/theme";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: 310,
    backgroundColor:COLORS.Gris,
  },
  containerUser: {
    paddingHorizontal: 35,
    paddingVertical: 15,

  },

  UserNameText: {
    fontWeight: "700",
  },
  Button:{
    marginTop:20
  }
});
export default styles;
