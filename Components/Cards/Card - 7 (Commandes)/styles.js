import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Styles/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Blanc,
    borderRadius: 5,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    width: "100%",
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignSelf: "center",
    marginTop: 10,
  },
  top: {
    height: 183,
    width: "100%",
  },
  bottom: {
    flex: 1,
    padding: 20,
  },

  TextT1: {
    color: COLORS.Blue2,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  row2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:20,
    marginVertical:10,
  
  },
  TextT2: {
    marginRight:10
  },
  Divider:{
    height:1,
    backgroundColor:"#000",
    width:"90%",
    alignSelf:"center",
    opacity:0.2
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
  BoxButton:{
    padding:20
  },
  space:{
    height:20
  },

});

export default styles;
