import { View } from "react-native";
import React, { useState } from "react";
import styles from "./Hooks/styles";
import FavorisAdressesCard from "../../../../../Components/Cards/Card - 4 (adresses)";
import BoxTitle from "../../../../../Components/Cards/Card - Header - title";
import GrisView from "../../../../../Components/View/GrisView";
import { useSelector } from "react-redux";
const BestAdresses = ({ Nav }) => {
  const Establishements = useSelector((state) => state.Establishements);
  const { establishments } = Establishements;
  let size = 3;
  const NewEstablishement = establishments.establishments?.slice(0, size);


const onPress=() => {
  Nav("AllBestAddresses", null);
}
  return (
    <GrisView style={styles.container}>
      <BoxTitle title={"🔥 Les meilleurs adresses"} onPress={onPress}/>

      {NewEstablishement?.map((item, ind) => {
        return (
          <View key={ind}>
            <FavorisAdressesCard item={item} Nav={Nav} ind={ind} />
          </View>
        );
      })}
    </GrisView>
  );
};

export default BestAdresses;
