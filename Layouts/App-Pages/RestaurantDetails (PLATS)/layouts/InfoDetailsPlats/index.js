import { TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Hooks/styles";
import { ScrollView } from "react-native";
import ItemRender from "./Components/item";
import { ImageBackground } from "react-native";
import Card4Img from "../../../../../Assets/Images/ComdRecentsDetails.png";
import { StyleSheet } from "react-native";
import {
  BoldTxt,
  FraisTxt,
  GoldTxt,
  H4,
  H7,
  Txt,
} from "../../../../../Components/utils/TextComponents";
import { Image } from "react-native";
import { PrimaryButton } from "../../../../../Components/utils/Buttons";
import InfoImg from "../../../../../Assets/Images/InfoImgCircl.png";
import ImageReturn from "../../../../../Assets/Images/CroixLight.png";

import HView from "../../../../../Components/View/HView";
import GrisView from "../../../../../Components/View/GrisView";
import { OptionDataPlat, OptionDataPlat2 } from "../../../../../Data";

import { COLORS } from "../../../../../Components/Styles/theme";
import RenderOptions from "./Components/RenderOptions";
import Plus from "../../../../../Assets/Images/+.png";
import Mins from "../../../../../Assets/Images/-2.png";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FixaddCart,
  FixdelCart,
  SelectRestaurant,
} from "../../../../../Redux/Actions/panier/FixAddToCartAcions";
import { GET_ID_ESTABLISHEMENTS } from "../../../../../Redux/Types/ValidationOrder";

const InfoMonPlat = ({ navigation, navigation: { goBack }, route }) => {
  const { item, id,title } = route.params;

  // const {item } =data
  // console.log('item', item , id)
  const FixCarts = useSelector((state) => state.FixCarts);
  const { Carts, restaurantSelected ,haveProducts} = FixCarts;
  const dispatch = useDispatch();
  const handleAdd = (items) => {
    if (!restaurantSelected) {
      SelectRestaurant(dispatch, title);
      FixaddCart(Carts, items, dispatch);
      dispatch({ type: GET_ID_ESTABLISHEMENTS, payload: id });
    } else {
      SelectRestaurant(dispatch, title);
      FixaddCart(Carts, items, dispatch);
      dispatch({ type: GET_ID_ESTABLISHEMENTS, payload: id });
    }
  };

  const handleDel = (item) => {
    FixdelCart(Carts, item.item, dispatch);
  };
  // console.log('Carts', Carts)

  useEffect(() => {
    AsyncStorage.setItem("Cart", JSON.stringify(Carts));
    AsyncStorage.setItem("id", JSON.stringify(id));
  }, [haveProducts,id]);

  return (
    <View style={styles.Bigcontainer}>
      {/* <HeaderPrimary Title={"Ma commande récente"} goBack={goBack} /> */}
      <ScrollView>
        <>
          <GrisView style={styles.cardInfo}>
            <HView style={styles.HederView}>
              <TouchableOpacity onPress={goBack}>
                <Image source={ImageReturn} style={styles.Image} />
              </TouchableOpacity>
              <Txt color={COLORS.Blanc} Bold="700">
                Choix des ingrédients
              </Txt>
            </HView>
            <View style={styles.top}>
              <ImageBackground
                style={{ ...StyleSheet.absoluteFillObject }}
                source={Card4Img}
                resizeMode="cover"
              />
            </View>
            <View style={styles.bottom}>
              <HView spaceBetween>
                <H4 numberOfLines={1}>{item?.title}</H4>
                <Image source={InfoImg} />
              </HView>

              <FraisTxt style={styles.price}>
                {item?.price?.toFixed(2)} €
              </FraisTxt>
              <Txt style={styles.BoxText}>{item?.description}</Txt>
            </View>
          </GrisView>
          <GrisView style={styles.cardInfo}>
            <View style={styles.Inside}>
              <HView spaceBetween>
                <H7>Choix ingrédient 1</H7>
                <FraisTxt fontSize={12}>Obligatoire</FraisTxt>
              </HView>
              <View style={{ marginTop: 10 }}>
                {OptionDataPlat.map((item) => {
                  return (
                    <View key={item?.id}>
                      <RenderOptions item={item} />
                    </View>
                  );
                })}
              </View>
            </View>
          </GrisView>

          <GrisView style={styles.cardInfo}>
            <View style={styles.Inside}>
              <HView spaceBetween>
                <H7>Choix ingrédient 2</H7>
                <FraisTxt fontSize={12}>Obligatoire</FraisTxt>
              </HView>
              <View style={{ marginTop: 10 }}>
                {OptionDataPlat2.map((item) => {
                  return (
                    <View key={item?.id}>
                      <RenderOptions item={item} />
                    </View>
                  );
                })}
              </View>
            </View>
          </GrisView>

          <View style={styles.space} />
        </>
      </ScrollView>
      <View style={{ padding: 30 }}>
        <PrimaryButton onPress={() => handleAdd(item)}>
          Ajouter 1 au panier : {item?.price?.toFixed(2)} €
        </PrimaryButton>
      </View>
      {/* Number of products */}
      <HView
        spaceBetween
        style={{
          backgroundColor: "#FFF",
          width: "50%",
          alignSelf: "center",
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            Carts.map((i) => {
              if (i.quantity !== 1) {
                handleDel(item);
              } else {
                console.log("enter", i.quantity);
              }
            })
          }
        >
          <Image source={Mins} />
        </TouchableOpacity>
        <Txt>
          {Carts.map((i) => {
            if (i.id === item?.id) {
              return i.quantity;
            } else {
              return null;
            }
          })}
        </Txt>
        <TouchableOpacity onPress={() => handleAdd(item)}>
          <Image source={Plus} style={{ backgroundColor: "#fff" }} />
        </TouchableOpacity>
      </HView>
    </View>
  );
};

export default InfoMonPlat;
