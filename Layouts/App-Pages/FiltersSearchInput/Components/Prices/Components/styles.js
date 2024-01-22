import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  Item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height:50,
    width:50,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor:"#fff",
    borderRadius:50,
    marginVertical:5,
    marginHorizontal:5
  },
  T2:{
    color:COLORS.Noir,
    fontWeight:"700"
  }
});

export default styles;
