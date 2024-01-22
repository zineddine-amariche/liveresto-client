import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { H7 } from "../../../../../../../Components/utils/TextComponents";

const FlagsRender = ({ item }) => {
  return (
    <View style={styles.Flags} key={item.Id}>
      <Image source={item.img} />
      <H7 style={styles.FlagsText}>{item.name}</H7>
    </View>
  );
};

export default FlagsRender;
