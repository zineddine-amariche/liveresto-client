import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../Styles/theme";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "center",
  },
  Center: {
    flexDirection: "row",
    backgroundColor: "#eee",
    height: 50,
    alignSelf: "center",
    width: "90%",
    borderRadius:35,
  },
  Button: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fffccc",
    position: "absolute",
    left: 12,
    zIndex:6,
    top:12,
    borderRadius:25
  },
  TextTitle: {
    fontWeight: "700",
    fontSize: 18,
  },
  input: {
    // backgroundColor: "#ccc",
    width: "100%",
    alignSelf: "center",
    paddingLeft:60,

  },Ville:{
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fffccc",
    position: "absolute",
    right: 20,
    zIndex:6,
    top:12,
    flexDirection:"row"
  },
  textVille:{
    fontSize:18,
    fontWeight:"700",
    color:COLORS.black
  }
});
export default styles;
