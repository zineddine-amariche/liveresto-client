import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import panierImg from "../../../Assets/Images/panier.png";
import { H4, Txt } from "../../../Components/utils/TextComponents";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../Components/utils/Buttons";
import { useSelector } from "react-redux";
import Articles from "./useArticles";
import { StatusBar } from "react-native";
import { COLORS } from "../../../Components/Styles/theme";

const Panier = ({ navigation, navigation: { goBack } }) => {
  const Nav = (name) => {
    navigation.navigate(name);
  };

  const panier = useSelector((state) => state.Panier);
  const { data } = panier;

  const FixCarts = useSelector((state) => state.FixCarts);

  const { Carts } = FixCarts;

  const Totale = () => {
    let defaultDeliveryPrice = 0;
    let sum = 0;
    let all = 0;
    Carts.map((i) => {
      sum += i.quantity * i.price;
      all = sum + defaultDeliveryPrice;
    });
    return (
      <PrimaryButton
        onPress={() => {
          Nav("Commander");
        }}
      >
        Commander : {all?.toFixed(2)}€
      </PrimaryButton>
    );
  };



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle={"dark-content"}
        backgroundColor={COLORS.Blanc}
      />

      <HeaderPrimary Title={"Panier"} goBack={goBack} Modify={"Commandes"} />
      <ScrollView>
        {Carts?.length ? (
          <>
            <View>
              <Articles />
            </View>
            <View style={styles.BoxButton}>
              <Totale />
            </View>
          </>
        ) : (
          <View>
            <View style={styles.boxImg}>
              <Image source={panierImg} />
            </View>
            <View style={styles.boxText}>
              <H4 style={styles.text}>Ajoutez des articles à votre panier</H4>
            </View>
            <View style={styles.boxText}>
              <Txt style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, dui
                vitae adipiscing vel pretium, nunc id enim, tempor. Sem nibh
                quis duis nibh dignissim consectetur.
              </Txt>
            </View>
            <View style={styles.BoxButton}>
              <PrimaryButton onPress={() => Nav("MesCommandes")}>
                Choisir un restaurant
              </PrimaryButton>
              <View style={styles.space} />
              <SecondaryButton onPress={() => Nav("FiltersSearchInput")}>
                Rechercher
              </SecondaryButton>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Panier;
