import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import styles from "./styles";
import Card4Img from "../../../Assets/Images/Addresses.png";
import Like from "../../../Assets/Images/Like.png";
import { H7, LightTxt } from "../../utils/TextComponents";
import { COLORS } from "../../Styles/theme";

const OffresOfDayCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          source={Card4Img}
          resizeMode="cover"
        />

        <Image source={Like} style={styles.Like} />

        <View style={styles.Time}>
          <LightTxt style={styles.TextTime}>Profitez de</LightTxt>
        </View>
        <View style={styles.Reduction}>
          <LightTxt style={{ color: COLORS.Rouge }}>-15 %</LightTxt>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.Body}>
          <H7 style={styles.TextH7}>La lune de Béjaïa</H7>
          <View style={styles.row}>
            <H7 style={{ color: COLORS.Jaune2, fontWeight: "400" }}>
              <H7 style={{ color: COLORS.Jaune2 }}>⭐ </H7> 4,7{" "}
              <H7 style={styles.TextH72}>
                | Cuisine Algérienne, spécialités Kabyle
              </H7>
            </H7>
          </View>
          <View style={styles.row}>
            <H7 style={{ color: COLORS.Blue2 }}>30 min | Livraison gratuite</H7>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OffresOfDayCard;
