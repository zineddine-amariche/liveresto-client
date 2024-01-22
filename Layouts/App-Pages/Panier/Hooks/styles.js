import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../Components/Styles/theme";

 const styles = StyleSheet.create({
  container: {
    backgroundColor:COLORS.Blanc, 
  },

  boxImg: {
    alignSelf: "center",
  },
  boxText: {
    paddingHorizontal: 60,
    marginTop:20
  },
  text:{
    textAlign:"center"
  },
  BoxButton:{
    paddingBottom:90,
    paddingTop:30,
    paddingHorizontal:30,
  },
  space:{
    height:20
  },
  BoxDisponible:{
    width:"100%",
    paddingHorizontal:30,
    marginBottom:5
  },
  Recents:{
    width:"100%",
    paddingHorizontal:30,
    marginVertical:15
  }
});

export default styles
