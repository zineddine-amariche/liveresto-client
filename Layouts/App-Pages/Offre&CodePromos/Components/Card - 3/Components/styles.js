import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignSelf: "center",
  },
  points: {
    marginVertical: 15,
  },
  BoxItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  Space: {
    height: 20,
  },
});

export default styles;
