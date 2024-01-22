import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import styles from "./styles";
import Card1 from "../../../Assets/Images/Card2.png";
import { H7, LightTxt } from "../../utils/TextComponents";

const RecentsCMDCard = ({ Title, Time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.Left}>
        <H7 style={styles.T1}>La Lune de Béjaïa</H7>
        <LightTxt style={styles.T2}>
          3 articles | 38,70 € | 20 septembre 2020
        </LightTxt>
      </View>
      <View style={styles.Right}>
        <Image source={Card1} style={styles.image} />
      </View>
    </View>
  );
};

export default RecentsCMDCard;
