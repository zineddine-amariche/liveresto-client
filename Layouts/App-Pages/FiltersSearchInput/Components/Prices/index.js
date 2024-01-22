import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { ListPrices } from "../../../../../Data";
import ItemPrices from "./Components/ItemFilter - render";

const Prices = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ListPrices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemPrices item={item} key={item.id} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          width: "90%",
          justifyContent: "space-between",
        }}
      />
    </View>
  );
};

export default Prices;
