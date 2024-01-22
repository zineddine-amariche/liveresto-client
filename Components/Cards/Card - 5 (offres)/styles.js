import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Styles/theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection:"row",
    marginVertical:10
  },
  top: {
    height: "100%",
    width: "40%",
  },
  bottom: {
    backgroundColor: "#fff",
    flex: 1,
  },
  Body: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  TextH7: {
    color: COLORS.Noir,
    fontWeight: "700",
  },
  TextH72: {
    color: COLORS.Noir,
    fontWeight: "400",
  },
  Like: {
    position: "absolute",
    left: 10,
    top: 70,

  },
  Time: {
    backgroundColor: COLORS.Rouge,
    borderRadius: 30,
    position: "absolute",
    top: 10,
    left: 5,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    height:24,
    width:97,
    alignItems:"center",
    justifyContent:"center"
  },
  Reduction:{
    backgroundColor: COLORS.Blanc,
    borderRadius: 30,
    position: "absolute",
    top: 35,
    left: 5,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    height:24,
    width:59,
    alignItems:"center",
    justifyContent:"center"
  },
  TextTime: {
    color: COLORS.Blanc,
  },
  row: {
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
    lineHeight: 18,

  },
  padding5:{
    height:5
  }
});

export default styles;
