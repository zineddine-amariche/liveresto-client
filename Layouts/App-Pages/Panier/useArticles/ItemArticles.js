import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { FraisTxt, Txt } from "../../../../Components/utils/TextComponents";
import Delete from "../../../../Assets/Images/Delete.png";
import { Image } from "react-native";
import HView from "../../../../Components/View/HView";
import { useDispatch, useSelector } from "react-redux";
import { FixdelCart } from "../../../../Redux/Actions/panier/FixAddToCartAcions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ItemArticles = ({ item }) => {
  const dispatch = useDispatch();
  const FixCarts = useSelector((state) => state.FixCarts);
  const { Carts } = FixCarts;

  const handleDel = (item) => {
    FixdelCart(Carts, item, dispatch);
  };



  return (
    <View style={styles.row1}>
      <TouchableOpacity
        onPress={() =>
          Carts.map((i) => {
            handleDel(item);
          })
        }
      >
        <Image source={Delete} style={{ marginRight: 10 }} />
      </TouchableOpacity>
      <View>
        <HView spaceBetween>
          <View style={styles.row2}>
            <Txt style={styles.TextT2}>×{item.quantity}</Txt>
            <Txt style={styles.TextT2} numberOfLines={1}>
              {item.title}
            </Txt>
          </View>
          <FraisTxt>{item.price.toFixed(2)} €</FraisTxt>
        </HView>
        <View style={styles.Divider}></View>
      </View>
    </View>
  );
};

export default ItemArticles;

const styles = StyleSheet.create({
  row1: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },
  TextT2: {
    marginRight: 10,
  },
  Divider: {
    height: 1,
    backgroundColor: "#000",
    alignSelf: "center",
    opacity: 0.2,
    width: "90%",
    marginTop: 5,
  },
});
