import { Animated, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CategoryPlats } from "../../../../../Data";
import ItemCategoryRender from "../ItemCategoryRender";
import { COLORS } from "../../../../../Components/Styles/theme";
import { useSelector } from "react-redux";

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 240;

const HeaderCategory = ({ scroll,products ,ScrolToHandeler}) => {


  const [ItemSelect, setItemSelect] = useState(null);
  const SelecteItem = (itemToSelect) => {
    setItemSelect(itemToSelect);
  };
  const headerDiffClampTitle = Animated.diffClamp(scroll, -220, 140);
  const translateTitle = Animated.multiply(headerDiffClampTitle, 1);
  const scrollXCategory = scroll.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  
  const OpacityYCategory = scroll.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={[
        styles.header,
        {
          transform: [
            { translateY: translateTitle },
            { scale: scrollXCategory },
          ],
          opacity: OpacityYCategory,
        },
      ]}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentInset={{
        top:0,
        left:0,
        right:20,
        bottom:0
      }}
      scrollEventThrottle={1}
      contentContainerStyle={{
        paddingRight:Platform.OS === "android" ? 10 :0
      }}
      >
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 15,
            flexDirection: "row",
            paddingLeft:15,
          }}
        >
          {products?.categories?.map((item, index) => {
            return (
              <View key={index}>
                <ItemCategoryRender item={item} SelecteItem={SelecteItem} index={index} ItemSelect={ItemSelect} ScrolToHandeler={ScrolToHandeler} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default HeaderCategory;

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
});
