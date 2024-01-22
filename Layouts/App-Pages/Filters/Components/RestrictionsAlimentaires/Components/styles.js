import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../Components/Styles/theme";

const styles = StyleSheet.create({

  container: {
    width: "100%",
    backgroundColor: COLORS.Gris,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop:10
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

});

export default styles;

