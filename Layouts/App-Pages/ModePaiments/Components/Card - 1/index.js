import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./Components/styles";
import { H7 } from "../../../../../Components/utils/TextComponents";
const CardA1 = () => {
  return (
    <View style={styles.container}>
      <H7 Bold={"400"}>
        Sauvegardez votre carte bancaire pour faciliter le paiement de vos
        commandes à venir.
      </H7>
    </View>
  );
};

export default CardA1;
