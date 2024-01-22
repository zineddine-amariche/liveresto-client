import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../../Components/Styles/theme";
const { height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex:1,
  },
  header: {
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    margin: 10,
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingHorizontal: 20,
    marginHorizontal: 21,
    marginVertical: 20,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.Rouge,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    height: 40,
    backgroundColor: "#08d4c4",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    // justifyContent: "center",
    // flex:1,
    // height:height
  },
  containerABS: {
    alignSelf: "center",
    backgroundColor: "transparent",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.Blanc,
    lineHeight: 27.6,
  },
  RowText: {
    flexDirection: "row",
    alignItems: "center",
  },
  ScTitle: {
    marginVertical: 10,
    color: COLORS.Noir,
    fontFamily:'Helvetica'
  },
  Box: {
    width: "100%",
    alignItems: "center",

  },
  otherAuth: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom:5
  },
  Press: {
    backgroundColor: COLORS.Blanc,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
    marginTop: 30,
    borderRadius: 4,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    paddingHorizontal:20,
    width:"45%"
  },
  IconG: {
    marginRight: 4,
  },
});

export default styles;
