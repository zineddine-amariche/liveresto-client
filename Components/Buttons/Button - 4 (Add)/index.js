import { Image, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/theme";
import FilterImg from "../../../Assets/Images/FilterImg.png";
const AddButton = ({ source, shadow, onPress }) => {
  return (
    <Pressable
      style={ styles.container }
      onPress={onPress}
    >
      <Image source={source}  />
    </Pressable>
  );
};
export default AddButton;

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
    height:30,
    width:30, 
    marginRight:10
  },
  container2: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
