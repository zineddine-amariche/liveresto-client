import { Image, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/theme";
import FilterImg from "../../../Assets/Images/FilterImg.png";
const ButtonFilter = ({ source, shadow, onPress }) => {
  return (
    <Pressable
      style={shadow ? styles.container : styles.container2}
      onPress={onPress}
    >
      <Image source={source}  />
    </Pressable>
  );
};
export default ButtonFilter;

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    overflow: "hidden",
    backgroundColor: COLORS.Blanc,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    height:40,
    width:40
  },
  container2: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
