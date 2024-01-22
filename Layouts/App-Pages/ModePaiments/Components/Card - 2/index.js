import { View, Text } from "react-native";
import React from "react";
import styles from "./Components/styles";
import Item from "../item";
import { dataMesAdresses, dataProfile } from "../../../../../Data";
import { H4 } from "../../../../../Components/utils/TextComponents";
import { PrimaryButton } from "../../../../../Components/utils/Buttons";

const CardA2 = ({ Nav }) => {
  return (
    <View style={styles.container}>
      <PrimaryButton opacity={1}
      onPress={()=>{Nav("AddNewCashCard")}}
      
      >Ajouter une carte bancaire</PrimaryButton>
    </View>
  );
};

export default CardA2;
