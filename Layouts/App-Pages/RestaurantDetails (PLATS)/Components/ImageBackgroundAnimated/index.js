import { Animated, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import HeaderReturn from "../HeaderReturn";
import HeaderInfoAnimated from "../HeaderInfoAnimated";
import { ImageBackground } from "react-native";
import backImg from "../../../../../Assets/Images/EllipseBac.png";
import HView from "../../../../../Components/View/HView";
import { GoldTxt, H7 } from "../../../../../Components/utils/TextComponents";
import { COLORS } from "../../../../../Components/Styles/theme";
import Ceour from "../../../../../Assets/Images/Ceour.png";

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 240;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const ImageBackgroundAnimated = ({
  scroll,
  goBack,
  title,
  rate,
  navigationTo,
  speciality,
  caption
}) => {
  const headerDiffClamp = Animated.diffClamp(scroll, 0, HEADER_SCROLL_DISTANCE);
  const translateHeader = Animated.multiply(headerDiffClamp, -1);

  const scrollYTitle = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_SCROLL_DISTANCE + 45, HEADER_MAX_HEIGHT - 255],
    extrapolate: "clamp",
  });

  const OpacityInfo = scroll.interpolate({
    inputRange: [0, HEADER_MIN_HEIGHT ],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={[styles.header, { transform: [{ translateY: translateHeader }] }]}
    >
      <ImageBackground
        style={{
          ...StyleSheet.absoluteFillObject,
          height: HEADER_MAX_HEIGHT - 100,
        }}
        source={backImg}
        resizeMode="cover"
      />
      <HeaderReturn
        scroll={scroll}
        goBack={goBack}
        navigationTo={navigationTo}
      />

      <Animated.View
        style={{
          backgroundColor: "#fff",
          transform: [{ translateY: scrollYTitle }],
          flex: 1,
          width: "100%",
          paddingTop: 10,
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
      >
      <Animated.View 
        style={{
          opacity: OpacityInfo,
        }}
      >

        <TouchableOpacity
             style={{
          // backgroundColor: "#ccc",
          // transform: [{ translateY: scrollYTitle }],
          paddingTop: 10,
          paddingBottom: 20,
          paddingHorizontal: 20,
          position:'absolute',
          right:-20,
          top:-50,
          
        }}>
          <Image source={Ceour} />
        </TouchableOpacity>
      </Animated.View>
        <HView spaceBetween>
          <H7 style={styles.textT1}>{title}</H7>
          <GoldTxt style={styles.Gold}>⭐ {rate}</GoldTxt>
        </HView>
      </Animated.View>
      <HeaderInfoAnimated scroll={scroll} speciality={speciality} caption={caption} />
    </Animated.View>
  );
};

export default ImageBackgroundAnimated;

const styles = StyleSheet.create({
  container: {
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
    width: 136,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  TextGR: {
    color: COLORS.Blanc,
    fontWeight: "400",
  },
});
