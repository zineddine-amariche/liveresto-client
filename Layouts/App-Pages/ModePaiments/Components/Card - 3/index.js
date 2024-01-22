import { View } from "react-native";
import React from "react";
import styles from "./Components/styles";
import Cashcard from "./Components/CashCard";
import { dataCards } from "../../../../../Data";

const CardA3 = () => {
  return (
    <View style={styles.container}>
      {dataCards.map((item) => {
        return <Cashcard item={item} key={item.id}/>;
      })}
    </View>
  );
};

export default CardA3;
