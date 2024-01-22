import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import CardB1 from "./Components/Card - 1";
import CradsOffres from "./Components/Card - 2";
import CardCodePromos from "./Components/Card - 3";

const OffreCodePromos = ({ navigation, navigation: { goBack } }) => {
  const Nav = (path,item) => {
    navigation.navigate(path,{item});
  };

  const [SelectedButn, setSelectedButn] = useState(true);
  const onPress = () => {
    setSelectedButn(!SelectedButn);
  };

  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Offres et codes promos"} goBack={goBack} />
      <ScrollView>
        <View style={styles.ButtonRoundedBox}>
          <CardB1 SelectedButn={SelectedButn}  onPress={onPress} /> 

          {SelectedButn ? <CradsOffres Nav={Nav} /> : <CardCodePromos />}

        </View>
      </ScrollView>
    </View>
  );
};

export default OffreCodePromos;
