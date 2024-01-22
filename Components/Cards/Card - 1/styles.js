import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../Styles/theme";

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 150,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginRight: 20,
    marginTop:10
  },
  ContainerT: {
    marginTop: "40%",
    paddingHorizontal: 5,
  },
  T1: {
    fontWeight: "700",
    lineHeight: 18,
    color:COLORS.Blanc
  },
  T2: {
    color: COLORS.Blue4,
  },
});

export default styles;
