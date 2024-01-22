import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { H7 } from "../../../../../../../Components/utils/TextComponents";
import check from "../../../../../../../Assets/Images/check.png";

const ItemPrices = ({ item }) => {
  return (
    <TouchableOpacity style={styles.Item}>
      <View style={styles.Left}>
        <H7 style={styles.T2}>{item.name}</H7>
      </View>
      <View style={styles.right}>
        <Image source={check} />
      </View>
    </TouchableOpacity>
  );
};

export default ItemPrices;
