import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../Components/Styles/theme";

const styles = StyleSheet.create({

  container: {
    backgroundColor: COLORS.Gris,
    paddingVertical: 20,
    marginTop:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems:'center',
    justifyContent:'center'
  },
  T1: {
    color: COLORS.Noir,
    fontWeight: "700",
  },
  T2: {
    color: COLORS.Noir,
  },
  space: {
    height: 20,
  },
  List: {},
  Item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  RowBox:{
    flexDirection:"row",
    justifyContent:"space-evenly"
  }
});

export default styles;
