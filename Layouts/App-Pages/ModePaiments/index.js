import { View, Text } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import CardA1 from "./Components/Card - 1";
import CardA2 from "./Components/Card - 2";
import CardA3 from "./Components/Card - 3";

const ModePaiments = ({ navigation, navigation: { goBack } }) => {


  const Nav = (path) =>{
    navigation.navigate(path)
  }
  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Mes modes de paiement"} goBack={goBack} />
      <ScrollView>
        <View style={styles.cardInfo}>
          <CardA1  />
          <CardA2 Nav={Nav} />
          <CardA3 />
        </View>
      </ScrollView>
    </View>
  );
};

export default ModePaiments;
