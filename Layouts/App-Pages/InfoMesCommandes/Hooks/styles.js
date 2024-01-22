import { StyleSheet, Dimensions } from "react-native";
import { SIZES } from "../../../../Components/constants/theme";
import { COLORS } from "../../../../Components/Styles/theme";
const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 1;
const MAX_HEIGHT = SIZES.height / 2;
const styles = StyleSheet.create({
  Bigcontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.Blanc,
  },
  container: {
    backgroundColor: COLORS.Gris,
    overflow: "hidden",
    width: "100%",
    alignSelf: "center",
  },
  cardInfo:{
    width:"100%",
  },
  top: {
    width: "100%",
  },
  bottom: {
    padding: 20,
  },
  P10: {
    height: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  row2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  TextT2: {
    marginRight: 10,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  Divider: {
    height: 1,
    backgroundColor: "#000",
    width: "90%",
    alignSelf: "center",
    opacity: 0.2,
  },
  Avatar: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginRight: 20,
  },
  BoxButton: {
    padding: 20,
  },
  space: {
    height: 20,
  },
  BoxGradient:{
    width:136,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
    padding:4,
  },
  TextGR:{
    color:COLORS.Blanc,
    fontWeight:"400"
  },
});

export default styles;
