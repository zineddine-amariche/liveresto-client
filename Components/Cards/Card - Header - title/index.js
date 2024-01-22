
import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ToTop from "../../../Assets/Images/Arrow.png";
import styles from "./styles";
import { H4 } from "../../utils/TextComponents";

const BoxTitle = ({ title ,onPress}) => {
  return (
    <TouchableOpacity style={styles.BoxRow} onPress={onPress}>
      <H4 numberOfLines={1} style={{width:'90%'}}>{title}</H4>
      <Image source={ToTop} />
    </TouchableOpacity>
  );
};

export default BoxTitle;