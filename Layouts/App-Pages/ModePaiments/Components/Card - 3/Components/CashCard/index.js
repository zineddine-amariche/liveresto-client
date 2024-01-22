import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import CashcardImg1 from "../../../../../../../Assets/Images/CashCard.png";
import BMOICON from "../../../../../../../Assets/Images/BMOICON.png";
import Union from "../../../../../../../Assets/Images/Union.png";
import { H7 } from "../../../../../../../Components/utils/TextComponents";
import { COLORS } from "../../../../../../../Components/Styles/theme";

const Cashcard = ({item}) => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={CashcardImg1}
          resizeMode="cover"
          style={[styles.image, { ...StyleSheet.absoluteFillObject }]}
        />

        <View style={styles.Box}>
          <View style={styles.RowTop}>
            <View style={styles.Row}>
              <Text style={styles.Txt}>BMO</Text>
              <Image source={BMOICON} />
            </View>
            <View>
              <Image source={Union} />
            </View>
          </View>
          <View style={styles.RowTop}>
            <View>
              <H7>{item.Num}</H7>
              <H7>{item.name}</H7>
            </View>
            <View>
              <H7>{item.Date}</H7>
            </View>
          </View>
          <View style={styles.RowBottom}>
            <H7>CashBack - world elite</H7>
          </View>
        </View>
      </View>
      <Pressable style={styles.UpdateCarD}>
        <H7 Bold={"400"} style={{color:COLORS.Vert3}}>✏ Modifier les informations de la carte </H7>
      </Pressable>
    </>
  );
};

export default Cashcard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    overflow: "hidden",
    borderRadius: 11,
  },

  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  Space: {
    height: 20,
  },
  RowTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  Txt: {
    fontWeight: "700",
    marginRight: 10,
  },
  RowBottom: {
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  UpdateCarD:{
      alignSelf:"flex-end",
      marginVertical:15
  }
});
