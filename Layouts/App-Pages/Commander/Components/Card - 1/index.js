import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./Components/styles";
import { Txt } from "../../../../../Components/utils/TextComponents";
import ImgMoto from "../../../../../Assets/Images/moto.png";

const CardA1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row2}>
          <Image source={ImgMoto} style={{ marginRight: 15 }} />
          <Txt>Livraison dans 30 - 40 min </Txt>
        </View>
    </View>
  );
};

export default CardA1;
