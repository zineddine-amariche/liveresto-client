import { View, Text } from "react-native";
import React from "react";
import styles from "./Components/styles";
import Item from "../item";
import { dataProfile } from "../../../../../Data";

const CardP2 = ({Nav}) => {
  return (
    <View style={styles.container}>
      {dataProfile.map((item, ind) => {
        return (
          <View key={ind}>
            <Item title={item.title} Divider={item.divider} Nav={Nav}  item={item}/>
          </View>
        );
      })}
    </View>
  );
};

export default CardP2;
