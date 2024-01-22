import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../Components/Styles/theme";

 const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor:COLORS.Gris
  },
  Generate:{
    height:90,
    backgroundColor:COLORS.Blanc,
    padding:30,
    justifyContent:"center",
    position:"absolute",
      bottom:0,
      right:0,
      left:0
    },
});

export default styles
