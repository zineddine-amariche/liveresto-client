import { StyleSheet } from "react-native";
import { COLORS } from "../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  Fiter: {
    backgroundColor: COLORS.Gris,
    flex: 1,
  },
  BoxButton:{
    height:90,
    backgroundColor:COLORS.Blanc,
    bottom:0,
    left:0,
    right:0,
    width:"100%",
    padding:20
  },
  TextBoxResult:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'space-between',
    paddingHorizontal:30,
    paddingTop:15
  }

});

export default styles;
