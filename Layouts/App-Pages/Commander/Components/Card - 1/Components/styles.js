import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Gris,
    flex: 1,
    marginBottom:10,
    paddingHorizontal:30,
    paddingVertical:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
 
  Avatar:{
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginRight:20
  },
  item:{
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    justifyContent:"space-between",
    marginTop:20
  },
  Space:{
    height:20
  },
  row2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:20,
    marginVertical:10,
  
  },

});

export default styles;
