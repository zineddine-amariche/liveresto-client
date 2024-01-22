import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./Components/styles";
import { DarkTxt, H7 } from "../../../../../Components/utils/TextComponents";
const CardA1 = () => {
  return (
    <View style={styles.container}>
      <H7 Bold={"400"}>
        Entregistrez vos adresses pour que nous vous aidons à trouver les
        meilleures restaurants à proximité.
      </H7>
    </View>
  );
};

export default CardA1;
