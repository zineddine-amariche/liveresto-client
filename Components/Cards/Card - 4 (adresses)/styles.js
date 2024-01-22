import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Styles/theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignSelf:"center",
    width:"100%",
    marginVertical:10,

  },
  top: {
    height: 110,
    width: "100%",

  },
  bottom: {
    backgroundColor: "#fff",
    flex: 1,
  },
  Body: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  TextH7: {
    color: COLORS.Noir,
    fontWeight: "700",
  },
  TextH72: {
    color: COLORS.Noir,
    fontWeight: "400",
    width:'90%'
  },
  Like: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  Time: {
    backgroundColor: COLORS.Blanc,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 30,
    position: "absolute",
    bottom: -15,
    right: 8,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  TextTime: {
    color: COLORS.Vert3,
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
