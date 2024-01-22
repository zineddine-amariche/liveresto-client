import { View } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import OffresOfDayCard from "../../../../../Components/Cards/Card - 5 (offres)";
import BoxTitle from "../../../../../Components/Cards/Card - Header - title";
import GrisView from "../../../../../Components/View/GrisView";
const DayOffer = ({Nav}) => {
  const onPress=() => {
    Nav("AllDayOffer", null);
  }
  return (
    <GrisView style={styles.container}>
      <BoxTitle title={"🎉 Les offres du jour"} onPress={onPress} />
      <View style={styles.BoxCol}>
        <OffresOfDayCard />
        <OffresOfDayCard />
      </View>
    </GrisView>
  );
};

export default DayOffer;
