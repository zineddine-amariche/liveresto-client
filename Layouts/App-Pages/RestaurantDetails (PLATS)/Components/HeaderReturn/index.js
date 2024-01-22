import { Animated, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import HView from "../../../../../Components/View/HView";
import painer from "../../../../../Assets/Images/painer.png";
import User from "../../../../../Assets/Images/User.png";
import whiteArrow from "../../../../../Assets/Images/whiteArrow.png";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../../../../Components/Styles/theme";
import { useSelector } from "react-redux";
import { Txt } from "../../../../../Components/utils/TextComponents";

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 240;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HeaderReturn = ({ scroll, goBack, navigationTo }) => {
  const FixCarts = useSelector((state) => state.FixCarts);
  const { Carts } = FixCarts;

  const headerDiffClamp = Animated.diffClamp(scroll, 0, HEADER_SCROLL_DISTANCE);
  const translateHeader = Animated.multiply(headerDiffClamp, -1);
  const translateHeaderText = Animated.multiply(translateHeader, -1);

  return (
    <Animated.View
      style={{
        transform: [{ translateY: translateHeaderText }],
        paddingTop: 35,
        paddingBottom: 15,
        paddingHorizontal: 20,
      }}
    >
      <HView
        spaceBetween
        style={{
          width: "100%",
          marginTop: 1,
        }}
      >
        <Animated.View>
          <TouchableOpacity onPress={goBack} style={{ zIndex: 2000 }}>
            <Image source={whiteArrow} style={{ marginTop: 5 }} />
          </TouchableOpacity>
        </Animated.View>

        <HView>
          <TouchableOpacity
            onPress={() => {
              navigationTo("Panier");
            }}
            style={{ zIndex: 2000 }}
          >
            {Carts?.length ? (
              <View style={styles.NbrItem}>
                <Txt color={COLORS.Blanc} Bold="700" fontSize={14}>
                  {Carts?.length}
                </Txt>
              </View>
            ) : null}
            <Image source={painer} />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
              navigationTo("Profile");
            }}
          >
            <Image source={User} />
          </TouchableOpacity>

        </HView>
      </HView>
    </Animated.View>
  );
};

export default HeaderReturn;

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
  NbrItem: {
    position: "absolute",
    zIndex: 100,
    top: -5,
    backgroundColor: COLORS.Rouge,
    height: 20,
    width: 20,
    right: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

// const HeaderReturn = (

// );
