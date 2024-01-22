import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "./Components/styles";
import { ButtonRound } from "../../../../../Components/utils/Buttons";
import { COLORS } from "../../../../../Components/Styles/theme";
const CardA1 = ({ SelectedButn, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.Box}>
        <ButtonRound opacity={1} isPrimary={SelectedButn} onPress={onPress}>
          Offres
        </ButtonRound>
      </View>
      <View style={styles.Box}>
        <ButtonRound opacity={1} isPrimary={!SelectedButn} onPress={onPress}>
          Codes promos
        </ButtonRound>
      </View>
    </View>
  );
};

export default CardA1;
