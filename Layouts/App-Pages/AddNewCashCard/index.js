import { View, Text } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import CardA1 from "./Components/Card - 1";
import { PrimaryButton } from "../../../Components/utils/Buttons";

const AddNewCashCard = ({ navigation, navigation: { goBack } }) => {


  const Nav = (path) =>{
    navigation.navigate(path)
  }
  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Ajouter une carte bancaire"} goBack={goBack} />
      <ScrollView>
        <View style={styles.cardInfo}>
          <CardA1 />
          {/* <CardA2 Nav={Nav} />
          <CardA3 /> */}
        </View>
      </ScrollView>
      <View style={styles.Generate}>
        <PrimaryButton opacity={1} Bold={"700"}>
          Confirmer
        </PrimaryButton>
      </View>
    </View>
  );
};

export default AddNewCashCard;
