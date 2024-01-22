import { View, Text } from "react-native";
import React from "react";
import styles from "./Components/styles";
import { H7 } from "../../../../../Components/utils/TextComponents";
import Item from "./Components/ItemFilter Prices- render";
import { ListTri } from "../../../../../Data";

const Trier = () => {
  return (
    <View style={styles.container}>
      <H7 style={styles.T1}>Trier</H7>
      <View style={styles.space} />
      <View style={styles.List}>
        {ListTri.map((i) => {
          return <Item item={i} key={i.id} />;
        })}
      </View>
    </View>
  );
};

export default Trier;
