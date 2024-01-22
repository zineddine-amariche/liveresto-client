import { View, FlatList } from "react-native";
import React from "react";
import styles from "./Components/styles";
import { H7 } from "../../../../../Components/utils/TextComponents";
import { ListRestrictions } from "../../../../../Data";
import ItemRestrictions from "./Components/ItemRestrictions";

const Restrictions = () => {
  return (
    <View style={styles.container}>
      <H7 style={styles.T1}>Restrictions alimentaires </H7>

      <View style={{ marginTop: 10 }}>
        {ListRestrictions.map((item) => {
          return <ItemRestrictions item={item} key={item.key} />;
        })}
      </View>
    </View>
  );
};

export default Restrictions;
