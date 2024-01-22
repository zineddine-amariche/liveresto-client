import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
  },
  Space: {
    height: 20,
  },
  BoxItem: {
    height: 90,
    width: 94,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: COLORS.Blanc,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center"
  },

});

export default styles;
