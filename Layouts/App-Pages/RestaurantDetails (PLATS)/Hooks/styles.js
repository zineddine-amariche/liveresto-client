import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Blanc,
    flex: 1,
  },
  Box: {
    width: "100%",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  BoxItems: {
    alignSelf: "center",
    width: "100%",
    paddingHorizontal:30,
    paddingVertical:10
  },
  Title:{
    paddingVertical:10
  }
});

export default styles;
