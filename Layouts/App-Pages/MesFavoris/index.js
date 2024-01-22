import { View, Text } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import { DATAResults } from "../../../Data";
import FavorisAdressesCard from "../../../Components/Cards/Card - 4 (adresses)";

const MesFavoris = ({ navigation, navigation: { goBack } }) => {
  const Nav = (path,item) => {
    navigation.navigate(path,{item});
  };
  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Mes Favoris"} goBack={goBack} />
      <ScrollView>
        <View  style={styles.Box}>
          {DATAResults.map((item, ind) => {
            return <FavorisAdressesCard item={item} Nav={Nav} key={ind} />;
          })}
        </View>
        
      </ScrollView>
    </View>
  );
};

export default MesFavoris;
