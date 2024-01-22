import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import styles from "./styles";
import { H7, LightTxt } from "../../utils/TextComponents";

const FavorisCard = ({item} ) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.img}
        resizeMode="cover"
        style={[styles.image, { ...StyleSheet.absoluteFillObject }]}
      />
      <View style={styles.ContainerT}>
        <H7  style={styles.T1}>{item.Title}</H7>
        <LightTxt style={styles.T2}>{item.Time} min | Livraison gratuite</LightTxt>
      </View>
    </View>
  );
};

export default FavorisCard;
