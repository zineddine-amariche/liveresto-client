import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import PlatImg from "../../../Assets/Images/PlatImg.png";
import imgSource from "../../../Assets/Images/Add.png";
import { Image } from "react-native";
import AddButton from "../../Buttons/Button - 4 (Add)";
import HView from "../../View/HView";
import { Txt } from "../../utils/TextComponents";
import { COLORS } from "../../Styles/theme";
const CardArticles = () => {
  return (
    <View style={styles.containerViw}>
      <Image source={PlatImg} />
      <HView>
        <Txt Bold="700" style={{marginHorizontal:10,width:180}}>Bourek pommes de terre thon</Txt>
        <AddButton source={imgSource}></AddButton>
      </HView>
    </View>
  );
};

export default CardArticles;

const styles = StyleSheet.create({
  containerViw: {
    flexDirection: "row",
    height: 56,
    alignItems: "center",
    marginRight: 25,
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor:COLORS.Blanc,
    marginVertical:5,
    
  },
});
