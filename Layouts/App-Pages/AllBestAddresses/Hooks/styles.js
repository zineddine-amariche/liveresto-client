import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../Components/Styles/theme";

 const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor:COLORS.Blanc,
  },
  card :{
    backgroundColor: COLORS.Gris,
    width:"100%",
    padding:30
  }
});

export default styles
