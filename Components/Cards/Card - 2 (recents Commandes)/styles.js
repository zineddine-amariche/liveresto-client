import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Styles/theme";

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 5,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: COLORS.Blanc,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width:"100%",
    alignSelf:"center"
  },
  Left: {
    height: "100%",
    width: "55%",
    padding: 10,
  },
  Right: {
    height: "100%",
    flex: 1,
  },
  T1: {
    fontWeight: "700",
    lineHeight: 18,
    color: COLORS.Noir,
  },
  T2: {
    color: COLORS.Noir,
  },
  image:{
    width:"100%"
  },
   Space:{
    height:10
  }
});

export default styles;
