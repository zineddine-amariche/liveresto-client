import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../Styles/theme";
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems:"center",
    justifyContent:"center"
  },
  header: {
    width: "100%",
    justifyContent: "center",
    marginLeft: 10,
    marginTop: 5,
  },
  label: {
    fontWeight: "900",
    fontSize: 18,
    color: COLORS.black,
  },
  BoxRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 90,
  },
  labelTitle: {
    fontWeight: "900",
    fontSize: 22,
    color: COLORS.black,
  },
  codeContainer: {
    flexDirection: "row",
    width: "50%",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  code1: {
    height: 13,
    width: 13,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  code2: {
    height: 13,
    width: 13,
    borderRadius: 13,
    backgroundColor: COLORS.white,
  },
  containerNumbers: {
    width: 282,
    height: 348,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  number: {
    height: 75,
    width: 75,
    borderRadius: 75,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
    margin: 9,
  },
  numberText: {
    fontSize: 36,
    color: COLORS.black,
    letterSpacing: 0,
    textAlign: "center",
  },
  buttons: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  buttonAnnuler: {
    fontSize: 16,
    fontWeight: "700",
  },
  codeBoxError: {
    alignItems: "center",
    marginTop: 15,
  },
  codeBoxErrorText: {
    color: COLORS.red,
    fontSize: 17,
    fontWeight: "400",
  },
});
export default styles;
