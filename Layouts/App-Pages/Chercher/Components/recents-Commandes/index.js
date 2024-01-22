import { View } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import RecentsCMDCard from "../../../../../Components/Cards/Card - 2 (recents)"
import BoxTitle from "../../../../../Components/Cards/Card - Header - title";
import GrisView from "../../../../../Components/View/GrisView";
const Recents = ({Nav}) => {
  const onPress=() => {
    Nav("MesCommandes", null);
  }
  return (
    <GrisView style={styles.container}>
      <BoxTitle title={"🕓 Vos commandes récentes"}  onPress={onPress} />
      <View style={styles.BoxCol}>
        <RecentsCMDCard />
        <RecentsCMDCard />
      </View>
    </GrisView>
  );
};

export default Recents;
