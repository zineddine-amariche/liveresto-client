import { View  } from "react-native";
import React  from "react";
import styles from "./styles";
import { ButtonRound } from "../../../../../Components/utils/Buttons";
const CardB1 = ({ SelectedButn, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.Box}>
        <ButtonRound opacity={1} isPrimary={SelectedButn} onPress={onPress}>
        En attente
        </ButtonRound>
      </View>
      <View style={styles.Box}>
        <ButtonRound opacity={1} isPrimary={!SelectedButn} onPress={onPress}>
        Livrées
        </ButtonRound>
      </View>
    </View>
  );
};

export default CardB1;
