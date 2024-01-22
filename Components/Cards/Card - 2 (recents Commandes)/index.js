import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import styles from "./styles";
import Card1 from "../../../Assets/Images/CardCmd.png";
import { H7, LightTxt } from "../../utils/TextComponents";
import { XSButtonRound } from "../../utils/Buttons";
import { TouchableOpacity } from "react-native";

const RecentsCardCommandes = ({ item, OnNav }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => OnNav(item)}>
      <View style={styles.Left}>
        <H7 style={styles.T1}>{item.title}</H7>
        <LightTxt style={styles.T2}>{item.info}</LightTxt>
        <View style={styles.Space} />
        <XSButtonRound isPrimary style={{padding:4}}>Commander à nouveau</XSButtonRound>
      </View>
      <View style={styles.Right}>
        <Image source={Card1} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default RecentsCardCommandes;
