import { View, Text } from "react-native";
import React from "react";
import styles from "./Components/styles";
import Item from "../item";
import { dataMesAdresses, dataProfile } from "../../../../../Data";
import { H4 } from "../../../../../Components/utils/TextComponents";

const CardA2 = ({ Nav }) => {
  return (
    <View style={styles.container}>
      <H4>à proximité</H4>
      {dataMesAdresses.map((item, ind) => {
        return (
          <View key={ind}>
            <Item
              title={item.title}
              Divider={item.divider}
              Nav={Nav}
              item={item}
            />
          </View>
        );
      })}
    </View>
  );
};

export default CardA2;
