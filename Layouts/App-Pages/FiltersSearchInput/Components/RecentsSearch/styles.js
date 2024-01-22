import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.Gris,
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
  },
  Line: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.Noir,
    marginTop: 10,
    opacity: 0.3,
  },
});

export default styles;
