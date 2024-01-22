import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import CardPub from "../../../../../Components/Cards/Card - 3 (Pub)";
import { PubData } from "../../../../../Data";
import GrisView from "../../../../../Components/View/GrisView";

const PubContainer = () => {
  return (
    <GrisView style={styles.container}>
        <FlatList
          data={PubData}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return <CardPub item={item} index={index} key={index.toString()} />;
          }}
          horizontal
        />
    </GrisView>
  );
};

export default PubContainer;
