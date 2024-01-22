import { View } from "react-native";
import React from "react";
import { BoldTxt } from "../../utils/TextComponents";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../Styles/theme";
import { StyleSheet } from "react-native";

const CardMdGradient = ({ children }) => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[COLORS.Vert3, COLORS.Blue2]}
      style={styles.container}
    >
      <BoldTxt style={styles.TextGR}>{children}</BoldTxt>
    </LinearGradient>
  );

};

export default CardMdGradient;


const styles = StyleSheet.create({
  container: {
    height: 66,
    borderRadius: 5,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row'
  },
  TextGR: {
    color: COLORS.Blanc,
  },
});