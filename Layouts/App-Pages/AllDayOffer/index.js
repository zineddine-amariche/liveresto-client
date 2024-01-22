import { View, Text } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import OffresOfDayCard from "../../../Components/Cards/Card - 5 (offres)";

const AllDayOffer = ({ navigation, navigation: { goBack } }) => {
  const Nav = (path) => {
    navigation.navigate(path);
  };
  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Les offres du jour"} goBack={goBack} />
      <ScrollView>
        <View style={styles.BoxCol}>
          <OffresOfDayCard />
          <OffresOfDayCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default AllDayOffer;
