import { View, Text } from "react-native";
import React from "react";
import styles from "./Components/styles";
import { dataProfilePart4 } from "../../../../../Data";
import Item from "../item";

const CardP4 = ({Nav}) => {
  return (
    <View style={styles.container}>
      {dataProfilePart4.map((item, ind) => {
        return (
          <View key={ind}>
            <Item title={item.title} Divider={item.divider} item={item} last Nav={Nav} />
          </View>
        );
      })}
    </View>
  );
};

export default CardP4;
