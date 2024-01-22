import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Gris,
    flex: 1,
    marginBottom:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding:35,

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
  conatinerOne:{
    paddingVertical:10
  }
});

export default styles;
