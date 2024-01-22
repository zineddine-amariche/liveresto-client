import { Animated, StyleSheet, View } from "react-native";
import React from "react";
import { Txt } from "../../../../../Components/utils/TextComponents";
import OrderCard from "../../../../../Components/Cards/Card - 10 (Plats)";
import { COLORS } from "../../../../../Components/Styles/theme";

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 240;

const BodyAnimated = ({
  scroll,
  products,
  setRefer,
  setCords,
  dataSourceCorde,
  navigation,
  onShow,
  title,
  id
}) => {
  const TranslateBody = scroll.interpolate({
    inputRange: [-1, HEADER_MAX_HEIGHT],
    outputRange: [0, HEADER_MIN_HEIGHT - 220],
    extrapolate: "clamp",
  });



  return (
    <Animated.ScrollView
      ref={(ref) => {
        setRefer(ref);
      }}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scroll } } }],
        { useNativeDriver: true }
      )}
    >
      <View
        style={{
          height: HEADER_MAX_HEIGHT + 100,
          backgroundColor: COLORS.Blanc,
        }}
      ></View>

      <Animated.View
        style={{
          transform: [{ translateY: TranslateBody }],
        }}
      >
        <View style={{ padding: 20 }}>
          {products?.categories?.map((item, index) => {
            return (
              <View
                key={index}
                onLayout={(event) => {
                  const layout = event.nativeEvent.layout;
                  dataSourceCorde[index] = layout.y;
                  setCords(dataSourceCorde);
                  // console.log("h :", layout.height);
                  // console.log("w :", layout.width);
                  // console.log("x :", layout.x);
                  // console.log("y :", layout.y);
                }}
              >
                <Txt Bold={"700"} style={styles.Title}>
                  {item.title}
                </Txt>

                {item?.products.map((i, index) => {
                  return (
                    <View key={index}>
                      <OrderCard item={i} navigation={navigation} onShow={onShow} title={title} id={id} />
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </Animated.View>
    </Animated.ScrollView>
  );
};

export default BodyAnimated;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    backgroundColor: COLORS.Blanc,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  headerInfo: {
    justifyContent: "space-between",
    backgroundColor: COLORS.Blanc,
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
    backgroundColor: COLORS.Noir,
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
    backgroundColor: COLORS.Blanc,
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
  Title: {
    marginVertical: 20,
  },
});
