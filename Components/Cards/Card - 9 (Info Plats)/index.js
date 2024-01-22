import { View, Text, Animated, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  BoldTxt,
  FraisTxt,
  GoldTxt,
  H4,
  Txt,
} from "../../utils/TextComponents";
import { Image } from "react-native";
import backImg from "../../../Assets/Images/EllipseBac.png";
import whiteArrow from "../../../Assets/Images/whiteArrow.png";
import Left from "../../../Assets/Images/Left.png";
import painer from "../../../Assets/Images/painer.png";
import User from "../../../Assets/Images/User.png";
import ImgMoto from "../../../Assets/Images/moto.png";
import Ceour from "../../../Assets/Images/Ceour.png";
import { COLORS } from "../../Styles/theme";
import { StyleSheet } from "react-native";
import GrisView from "../../View/GrisView";
import HView from "../../View/HView";
import { ImageBackground } from "react-native";
import ItemArrowRight from "../../ItemRender/ItemArrowRight";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";

const { height: wHeight, width: wWidth } = Dimensions.get("window");

const CardDetailsRestaurant = ({
  setTopActions,
  scrollY,
  translateY,
  TopEdg,
  topActions,
  fadeOut,
}) => {
  return <GrisView style={{ width: "100%" }}></GrisView>;
};

export default CardDetailsRestaurant;

const styles = StyleSheet.create({
  Bigcontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.Blanc,
  },
  container: {
    backgroundColor: COLORS.Gris,
    overflow: "hidden",
    width: "100%",
    alignSelf: "center",
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

// <View style={[styles.cardInfo]}>
// <View
//   onLayout={(ev) => {
//     setTopActions(ev.nativeEvent.layout);
//   }}
// ></View>
// {topActions && (
//   <Animated.View
//     style={{
//       position: "absolute",
//       flexDirection: "row",
//       top: 80,
//       left: 0,
//       right: 0,
//       zIndex: 100,
//       paddingHorizontal: 30,
// backgroundColor: "#ccc",
//       height: 60,
//       zIndex: 1000,
//       width: "100%",
// transform: [
//   {
//     translateY: scrollY.interpolate({
//       inputRange: [-1, 0, -TopEdg - 1, -TopEdg, -TopEdg + 1],
//       outputRange: [0, 0, 0, 0, 1],
//     }),
//   },
// ],
//     }}
//   >
//     <HView
//       spaceBetween
//       style={{
//         width: "100%",
//       }}
//     >
//       {topActions && (
//         <Animated.View style={{ zIndex: 1001 }}>
//           <Image source={whiteArrow} />
//         </Animated.View>
//       )}

//       {/* {topActions && (
//         <Animated.View
//           style={{
//             zIndex: 1001,

//             opacity: scrollY.interpolate({
//               inputRange: [-1, 0, -TopEdg - 1, -TopEdg, -TopEdg + 39],
//               outputRange: [0, 0, 0, 0, 1],
//             }),
//           }}
//         >
//           <TouchableOpacity>
//             <Image
//               source={Left}
//               style={{  marginTop: 5 }}
//             />
//           </TouchableOpacity>
//         </Animated.View>
//       )} */}

//       {/* {topActions && (
//         <Animated.View
//           style={{
//             zIndex: 1001,

//             opacity: scrollY.interpolate({
//               inputRange: [-1, 0, -TopEdg - 1, -TopEdg, -TopEdg + 39],
//               outputRange: [0, 0, 0, 0, 1],
//             }),
//           }}
//         >
//           <H4>La Lune de Béjaïa</H4>
//         </Animated.View>
//       )} */}
//       {/* <Animated.View
//         style={{
//           opacity: scrollY.interpolate({
//             inputRange: [-1, 0, -TopEdg - 1, -TopEdg, -TopEdg + 39],
//             outputRange: [1, 1, 0.6, 0.3, 0],
//           }),
//         }}
//       > */}
//       <HView>
//         <Image source={painer} />
//         <Image source={User} />
//       </HView>
//       {/* </Animated.View> */}
//     </HView>
//   </Animated.View>
// )}

// {topActions && (
//   <Animated.View
// style={{
//   opacity: scrollY.interpolate({
//     inputRange: [-1, 0, -TopEdg - 1, -TopEdg, -TopEdg + 39],
//     outputRange: [0.6, 1, 0.3, 0.4, 0.9],
//   }),
// transform: [
//   {
//     scale: scrollY.interpolate({
//       inputRange: [0, 1, 100],
//       outputRange: [1, 1.2, 1],
//       extrapolate: "clamp",
//     }),
//   },
// ],
// }}
//   >
//     {/* <Animated.View style={[styles.top, {}]}>
//       <ImageBackground
//         style={{ ...StyleSheet.absoluteFillObject }}
//         source={backImg}
//         resizeMode="cover"
//       />
//     </Animated.View> */}
//   </Animated.View>
// )}

// {topActions && (
//   <View style={styles.bottom}>
//     <Animated.View
//       style={{
//         position: "absolute",
//         right: 35,
//         top: -25,
// opacity: scrollY.interpolate({
//   inputRange: [-1, 0, -TopEdg - 1, -TopEdg, -TopEdg + 39],
//   outputRange: [0.5, 1, 0.7, 0.4, 0.5],
// }),
//       }}
//     >
//       <Image source={Ceour} />
//     </Animated.View>
//     <Animated.View
//       style={{
//         zIndex: 1001,
// opacity: scrollY.interpolate({
//   inputRange: [-1, 0, -TopEdg - 1, -TopEdg, -TopEdg + 39],
//   outputRange: [1, 1, 0.6, 0, 0],
// }),
//       }}
//     >
//       <HView spaceBetween>
//         <H4>La Lune de Béjaïa</H4>
//         <GoldTxt>⭐ 4,7</GoldTxt>
//       </HView>
//     </Animated.View>
//     <Animated.View
//       style={{
// transform: [
//   {
//     translateY: scrollY.interpolate({
//       inputRange: [-1, 0, -TopEdg - 1, -TopEdg, -TopEdg + 3],
//       outputRange: [0, 0, 0, 0, -1],
//     }),
//   },
//         ],
//         zIndex: -1,
//       }}
//     >
//       <View style={styles.P10} />
//       <Txt>Cuisine Algérienne, spécialités Kabyle</Txt>
//       <View style={styles.P10} />
//       <HView>
//         <Image source={ImgMoto} style={{ marginRight: 10 }} />
//         <FraisTxt>30-40 min | Frais de livraison : 10,00€</FraisTxt>
//       </HView>
//       <View style={styles.P10} />
//       <LinearGradient
//         start={{ x: 1, y: 0 }}
//         end={{ x: 0, y: 1 }}
//         colors={[COLORS.Vert3, COLORS.Blue2]}
//         style={styles.BoxGradient}
//       >
//         <BoldTxt style={styles.TextGR}>Fermeture à 23h00</BoldTxt>
//       </LinearGradient>
//       <View style={styles.P10} />
//       <ItemArrowRight title={"Informations complémentaires"} />
//     </Animated.View>
//   </View>
// )}
// </View>
