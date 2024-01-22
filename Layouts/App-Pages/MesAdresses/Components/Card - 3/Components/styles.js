import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Gris,
    marginBottom:10,
    paddingHorizontal:30,
    paddingTop:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width:"100%"
  },
  points:{
    marginVertical:15
  },
  BoxItem:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  Row:{
    flexDirection:"row",
    alignItems:"center"
  },
  Space:{
     height: 20 
  },
  rowBack:{
    alignItems:'center',
    justifyContent:"center",
    width:75,
    flex:1
  },
  model: {
  },
  text: {
  },
  BoxBtn: {
    paddingHorizontal: 20,
    justifyContent:"flex-end",
  },
  scd: {
    paddingHorizontal: 30,
  },
});

export default styles;
