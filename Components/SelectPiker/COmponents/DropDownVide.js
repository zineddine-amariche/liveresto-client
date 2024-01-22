import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../Styles/theme";
import Chevron from "../../../Assets/Images/Chevron.png";
import { H7, Txt } from "../../utils/TextComponents";
import HView from "../../View/HView";

const DropDownVide = () => {
  const [ShowOption, setShowOption] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.DropDownStyle}
        activeOpacity={0.8}
        onPress={() => {
          setShowOption(!ShowOption);
        }}
      >
        <HView spaceBetween>
          <Txt
            color={COLORS.Vert2}
            Bold="700"
            fontSize={16}
          >{`Selectionner une adresse`}</Txt>

          <Image
            source={Chevron}
            style={{
              transform: [{ rotate: ShowOption ? "180deg" : "0deg" }],
            }}
          />
        </HView>

      </TouchableOpacity>
      <View style={styles.space}></View>
        {ShowOption && (
          <View style={styles.containerItems}>
            {/* {data.map((val, i) => {
              return ( */}
            <TouchableOpacity
              onPress={() => {
                setShowOption(false);
              }}
              style={styles.item}
            >
              <View>
                <Txt color={COLORS.Rouge} opacity={.6} Bold="700">Pas d'adresse !  </Txt>
                <Txt opacity={.6}>ajouter pour passer la commande </Txt>
              </View>
            </TouchableOpacity>
            {/* );
            })} */}
          </View>
        )}
    </View>
  );
};

export default DropDownVide;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  DropDownStyle: {
    backgroundColor: COLORS.Blanc,
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width: "100%",
    overflow: "hidden",
    borderRadius: 5,
  },


  containerItems: {
    backgroundColor: COLORS.Blanc,
    padding: 10,
    borderRadius: 1,
    overflow:"hidden",
  },
  item: {
    backgroundColor: COLORS.Blanc,
    paddingVertical: 10,
  },
  space:{
    height:5
  }
});
