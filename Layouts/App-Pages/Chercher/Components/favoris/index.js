import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import FavorisCard from "../../../../../Components/Cards/Card - 1";
import { favorisData } from "../../../../../Data";
import BoxTitle from "../../../../../Components/Cards/Card - Header - title";
import GrisView from "../../../../../Components/View/GrisView";
const Favoris = ({Nav}) => {
  const onPress=() => {
    Nav("MesFavoris", null);
  }
  return (
    <GrisView style={styles.container}>
      <BoxTitle title={"😍 Vos favoris"}  onPress={onPress}/>
      <FlatList
        horizontal
        data={favorisData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <FavorisCard item={item} index={index} key={index.toString()} />
          );
        }}
      />
    </GrisView>
  );
};

export default Favoris;
