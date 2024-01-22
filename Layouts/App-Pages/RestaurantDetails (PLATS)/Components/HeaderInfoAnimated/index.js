import { Animated, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  BoldTxt,
  FraisTxt,
  Txt,
} from "../../../../../Components/utils/TextComponents";
import HView from "../../../../../Components/View/HView";
import LinearGradient from "react-native-linear-gradient";
import ItemArrowRight from "../../../../../Components/ItemRender/ItemArrowRight";
import { COLORS } from "../../../../../Components/Styles/theme";
import ImgMoto from "../../../../../Assets/Images/moto.png";
import Add from "../../../../../Assets/Images/Add.png";
import Croix_ from "../../../../../Assets/Images/Croix_.png";
import down from "../../../../../Assets/Images/down.png";

import IconCustom from "../../../../../Components/IconCustom";
import { TouchableOpacity } from "react-native";
import { useCallback } from "react";
import { ScrollView } from "react-native-gesture-handler";

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 240;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HeaderInfoAnimated = ({ scroll,speciality,caption }) => {
  const headerDiffClampInfo = Animated.diffClamp(
    scroll,
    HEADER_MIN_HEIGHT + 40,
    270
  );

  const translateInfo = Animated.multiply(headerDiffClampInfo, -1.05);
  const translateHeaderinfo = Animated.multiply(translateInfo, -1);

  const heighter = scroll.interpolate({
    inputRange: [0, HEADER_MIN_HEIGHT],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const OpacityInfo = scroll.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - 210],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const [showOuverture, setshowOuverture] = useState(false);

  const toggleNumberOfLines = () => {
    if (!showOuverture) {
      //To toggle the show text or hide it
      setTextShown(!textShown);
    } else {
      setshowOuverture(false);
      setTextShown(!textShown);
    }
  };
  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
  }, []);
  return (
    <Animated.View
      style={{
        transform: [{ translateY: translateHeaderinfo }, { scale: heighter }],
        paddingHorizontal: 20,
        opacity: OpacityInfo,
      }}
    >
      <View style={styles.P10} />
      <HView>
        <Image source={ImgMoto} style={{ marginRight: 10 }} />
        <FraisTxt>30-40 min | Frais de livraison : 10,00€</FraisTxt>
      </HView>
      <View style={styles.P10} />

      <TouchableOpacity
        onPress={() => {
          if (!textShown) {
            setshowOuverture(!showOuverture);
          } else {
            setTextShown(false);
            setshowOuverture(!showOuverture);
          }
        }}
      >
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.Vert3, COLORS.Blue2]}
          style={styles.BoxGradient}
        >
          <HView spaceBetween>
            <BoldTxt style={styles.TextGR}>Fermeture à 23h00</BoldTxt>
            <IconCustom source={down} />
          </HView>
        </LinearGradient>
      </TouchableOpacity>

      {showOuverture ? (
        <View>
          <View style={styles.P10} />
          <HView style={{ alignItems: "baseline" , justifyContent:'space-between'}}>
            <Txt fontSize={14}>Du lundi au samedi : </Txt>
            <View>
              <Txt>12h00 - 14h30</Txt>
              <Txt>19h00 - 22h30</Txt>
            </View>
          </HView>

          <Txt fontSize={14}>Dimanche : Fermé</Txt>
        </View>
      ) : null}
      <View style={styles.P10} />

      <Txt Bold={"700"}>{speciality}</Txt>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#FFF",
            height: textShown ? 90 : 50,
            paddingVertical: 5,
          }}
        >
          <Txt
            onTextLayout={onTextLayout}
            numberOfLines={textShown ? undefined : 2}
          >
         {caption}
          </Txt>
        </View>
      </ScrollView>
      {/* <ItemArrowRight title={"Informations complémentaires"} /> */}

      {lengthMore ? (
        <>
          {textShown ? (
            <TouchableOpacity>
              <HView
                style={{
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <IconCustom source={Croix_} />

                <FraisTxt onPress={toggleNumberOfLines} color={COLORS.Vert2}>
                  Réduire
                </FraisTxt>
              </HView>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <HView
                style={{
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginTop: 10,
                }}
              >
                <IconCustom source={Add} />

                <FraisTxt onPress={toggleNumberOfLines} color={COLORS.Vert2}>
                  En savoir plus
                </FraisTxt>
              </HView>
            </TouchableOpacity>
          )}
        </>
      ) : null}
    </Animated.View>
  );
};

export default HeaderInfoAnimated;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    // height: HEADER_MAX_HEIGHT,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  headerInfo: {
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    height: 100,
    padding: 20,
    position: "absolute",
    width: "100%",
    zIndex: 10,
    top: HEADER_MIN_HEIGHT * 2 + 120,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 20,
  },

  scrollView: {
    backgroundColor: "#7FD8DD",
    marginTop: HEADER_MAX_HEIGHT,
    padding: 20,
  },

  Bigcontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.Blanc,
  },
  BoxCat: {
    backgroundColor: COLORS.Gris,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },

  cardInfo: {
    width: "100%",
  },
  top: {
    height: 390,
    width: "100%",
  },
  bottom: {
    padding: 35,
  },
  P10: {
    height: 10,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  row2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  TextT2: {
    marginRight: 10,
  },
  Divider: {
    height: 1,
    backgroundColor: "#000",
    width: "90%",
    alignSelf: "center",
    opacity: 0.2,
  },
  textT1: {
    fontWeight: "700",
    color: COLORS.Noir,
    fontSize: 22,
  },
  Avatar: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginRight: 20,
  },
  BoxButton: {
    padding: 20,
  },
  space: {
    height: 20,
  },
  BoxGradient: {
    borderRadius: 30,
    padding: 4,
    width: 200,
  },
  TextGR: {
    color: COLORS.Blanc,
    fontWeight: "400",
    paddingLeft: 10,
  },
});
