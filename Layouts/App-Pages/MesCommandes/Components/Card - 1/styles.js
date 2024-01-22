import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../Components/Styles/theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    height:60, 
    
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
  Box: {
    width: "50%",
    marginBottom:5
  },
});

export default styles;
