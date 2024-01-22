import { Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { SmallBoldTxt } from "../../utils/TextComponents";
import Icon from "../../../Assets/Images/🔍.png";
import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/theme";
const InputSearch = ({ text, onPress,width }) => {
  return (
    <TouchableOpacity style={[styles.BoxInput,{width}]} onPress={onPress}>
      <Image source={Icon} />
      <SmallBoldTxt style={styles.Input}>
        {text}
      </SmallBoldTxt>
    </TouchableOpacity>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  BoxInput: {
    backgroundColor: COLORS.Blanc,
    borderRadius: 4,
    height: 40,
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingLeft: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  Input: {
    marginLeft: 15,
    color: COLORS.Vert2,
  },
});
