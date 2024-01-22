import { View, Text } from "react-native";
import React, { useEffect } from "react";
import styles from "./stylesArticles";
import GrisView from "../../../../Components/View/GrisView";
import {
  DarkTxt,
  FraisTxt,
  H7,
  Txt,
} from "../../../../Components/utils/TextComponents";
import { dataCommandes } from "../../../../Data";
import ItemArticles from "./ItemArticles";
import CardArticles from "../../../../Components/Cards/Card - 8 (articles Panier)/CardArticles";
import { ScrollView } from "react-native";
import HView from "../../../../Components/View/HView";
import Moto from "../../../../Assets/Images/moto.png";
import { Image } from "react-native";
import CardMdGradient from "../../../../Components/Cards/Card - 6 (gradien md )";
import CardColGradient from "../../../../Components/Cards/Card - 6 (gradien md )/CardColGradient";
import { PrimaryButton } from "../../../../Components/utils/Buttons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GET_ORDER_VALIDATION } from "../../../../Redux/Types/ValidationOrder";

const Articles = () => {



  const FixCarts = useSelector((state) => state.FixCarts);
  const { Carts } = FixCarts;


  
  // const { order } = useSelector((state) => state.ValidationOrder);

  const Resto = useSelector((state) => state.Establishements);
  const { deliveryPrice } = Resto;

  

  const SousTotale = ({ defaultDeliveryPrice }) => {
    //  let Bold =Bold
    // let defaultDeliveryPrice = 0;
    let sum = 0;
    let all = 0;
    Carts.map((i) => {
      sum += i.quantity * i.price;
      all = sum + defaultDeliveryPrice;
    });

    return <FraisTxt> {all?.toFixed(2)} €</FraisTxt>;
  };

  return (
    <View style={styles.container}>
      <GrisView>
        <View style={styles.FUlL}>
          <H7>Articles</H7>
          <View style={styles.Box2}>
            {Carts?.map((item) => {
              return <ItemArticles item={item} key={item.id} />;
            })}
          </View>
        </View>
      </GrisView>
      <GrisView>
        <View style={styles.Title}>
          <H7>Ajouter des articles</H7>
        </View>

        <View style={styles.Box}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataCommandes.map((item) => {
              return <CardArticles item={item} key={item.id} />;
            })}
          </ScrollView>
        </View>
      </GrisView>
      <GrisView>
        <View style={styles.FUlL}>
          <HView>
            <Image source={Moto} style={{ marginRight: 10 }} />
            <Txt>Livraison dans 30 - 40 min </Txt>
          </HView>
        </View>
      </GrisView>

      <GrisView>
        <View style={styles.FUlL}>
          <CardColGradient title={"Couverts"}>
            Aidez-nous à réduire les déchets : ne demandez des couverts que si
            vous en avez besoin.
          </CardColGradient>
        </View>
      </GrisView>
      <GrisView>
        <View style={styles.FUlL}>
          <HView spaceBetween>
            <Txt>Sous-total</Txt>
            <SousTotale defaultDeliveryPrice={0} />
          </HView>
          <View style={styles.paddingTop} />
          <HView spaceBetween>
            <DarkTxt>Service</DarkTxt>
            <DarkTxt>00,00 €</DarkTxt>
          </HView>
          <View style={styles.paddingTop} />
          <HView spaceBetween>
            <DarkTxt>Livraison</DarkTxt>
            <DarkTxt>{deliveryPrice} €</DarkTxt>
          </HView>
          <View style={styles.Divider}></View>
          <HView spaceBetween>
            <H7>Sous-total</H7>
            {/* <FraisTxt Bold="700">38,70€</FraisTxt> */}
            <SousTotale Bold="700" defaultDeliveryPrice={deliveryPrice} />
          </HView>
        </View>
      </GrisView>
    </View>
  );
};

export default Articles;
