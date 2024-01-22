import { View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { H7 } from "../../utils/TextComponents";
import { SmButtonRound } from "../../utils/Buttons";
const CardPub = ({ item, index }) => {
  return (
    <View
      style={[styles.container, { backgroundColor: item.color }]}
      key={index}
    >
      <View style={styles.Left}>
        <H7 style={styles.TextL1}>{item.discription}</H7>
        <View style={styles.Padding} />
        <SmButtonRound style={styles.BoxBTN}>Découvrir</SmButtonRound>
      </View>
      <View style={styles.Right}>
        <Image source={item.img} />
      </View>
    </View>
  );
};

export default CardPub;
