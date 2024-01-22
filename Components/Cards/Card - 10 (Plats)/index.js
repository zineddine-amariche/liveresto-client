import { View, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import Card4Img from "../../../Assets/Images/CategryCarD.png";
import { FraisTxt, H7, Txt } from "../../utils/TextComponents";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { SelectRestaurant } from "../../../Redux/Actions/panier/FixAddToCartAcions";

const OrderCard = ({ item, onShow, title,id,navigation }) => {
  const FixCarts = useSelector((state) => state.FixCarts);
  const { Carts, restaurantSelected } = FixCarts;
// console.log('(((((((id)))))))', id)
// console.log('title', title)
// console.log('restaurantSelected', restaurantSelected)


  const OnNav = () => {
    if (!restaurantSelected) {
      // SelectRestaurant(dispatch, item.item.title);
      navigation.navigate("InfoMonPlat", { item,title,id });
    } else if (title !== restaurantSelected) {
      onShow();
      // console.log("title", title);
      // console.log("restaurantSelected", restaurantSelected);
    } else {
      navigation.navigate("InfoMonPlat",{  item ,title,id});
      console.log('3', )
    }
  };



  return (
    <TouchableOpacity style={styles.container} onPress={OnNav}>
      <View style={styles.top}>
        <ImageBackground
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          source={Card4Img}
          resizeMode="cover"
        />
      </View>

      <View style={styles.bottom}>
        <View style={styles.Body}>
          <H7 style={styles.TextH7}>{item.title}</H7>

          <FraisTxt>{item.price?.toFixed(2)} €</FraisTxt>

          <Txt fontSize={14} numberOfLines={3}>
            {item.description}
          </Txt>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
