import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Blanc,
  },
  Box: {
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: 35,
    marginVertical: 20,
  },
  Box2: {
    alignSelf: "center",
    width: "100%",
    marginTop:10

  },
  Title: {
    width: "100%",
    paddingHorizontal: 35,
    paddingTop: 20,
  },
  containerViw: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
    justifyContent: "center",
  },
  FUlL: {
    minWidth: "100%",
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  Divider: {
    height: 1,
    opacity: 0.2,
    backgroundColor: COLORS.Noir,
    marginVertical:10
  },
  paddingTop:{
    height:5
  },
  BoxButton:{
    padding:20
  },
});

export default styles;
