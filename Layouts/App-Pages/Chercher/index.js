import { View, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Hooks/styles";
import HeaderAccueil from "../../../Components/Headers/Header-Accueil";
import { COLORS } from "../../../Components/Styles/theme";
import CategorySearch from "./Components/CategorySearch";
import Favoris from "./Components/favoris";
import Recents from "./Components/recents-Commandes";
import PubContainer from "./Components/PubContainer";
import BestAdresses from "./Components/BestAdresses";
import DayOffer from "./Components/DayOffer";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_GUID } from "../../../Redux/Types/Accueil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashLaoder from "../Splash";
import { getEstablishement } from "../../../Redux/Actions/Establishements";
import { GET_IDS } from "../../../Redux/Types/Establishements";
import { PrimaryButton } from "../../../Components/utils/Buttons";
import { SIZES } from "../../../Components/constants/theme";
import {
  GET_ALL,
  GET_BILL,
  GET_HOTEL,
  GET_ID_ESTABLISHEMENTS,
  GET_PAYMENTS_VALIDATION,
  GET_PRODUCTS_VALIDATION,
} from "../../../Redux/Types/ValidationOrder";

const Chercher = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth);
  const { Guid } = useSelector((state) => state.search);
  const { loading, establishments, deliveryPrice } = useSelector(
    (state) => state.Establishements
  );
  const { Carts } = useSelector((state) => state.FixCarts);

  const Nav = (name, item) => {
    navigation.navigate(name, {
      item,
    });
  };

  const initialState = {
    city_id: 1,
  };

  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: `Bearer ${data.customer.token}`,
    },
  };

  // create Carts onject
  let Cart = [];
  Carts.map((i) =>
    Cart.push({
      id: i.id,
      quantity: i.quantity,
      comment: null,
      extras: null,
    })
  );
  // calcule somme des produit + quantity
  let sum = 0;
  let all = 0;
  Carts.map((i) => {
    sum += i.quantity * i.price;
    all = sum + deliveryPrice;
  });

  let amount = [
    {
      id: 3,
      amount: all,
    },
  ];

  const CreateValidtionOrderHotel = () => {
    let objectHotel = {
      fullName: `${data?.customer?.firstname} ${data?.customer?.lastname}`,
      phone: data?.customer?.mobile_phone,
      apartement: data?.customer?.company,
    };
    let objectBill = data?.customer?.email;

    // console.log('Product', Product)
    dispatch({ type: GET_HOTEL, payload: objectHotel });
    dispatch({ type: GET_BILL, payload: objectBill });
    
    dispatch({ type: GET_ALL, payload: all });
    dispatch({ type: GET_PRODUCTS_VALIDATION, payload: Cart });
    dispatch({ type: GET_PAYMENTS_VALIDATION, payload: amount });
  };

  useEffect(() => {
    CreateValidtionOrderHotel();
  }, [all]);

  useEffect(() => {
    getEstablishement(dispatch, initialState, configHead); //get establishments
  }, []);

  const getIds = () => {
    let Arr = [];
    if (establishments) {
      establishments?.establishments?.map((i) => {
        Arr.push(i.id);
        return Arr;
      });
    }
    dispatch({ type: GET_IDS, payload: Arr });
  };

  useEffect(() => {
    if (establishments.establishments) {
      getIds();
    }
  }, [establishments.establishments]);

  const closeHeder = () => {
    dispatch({ type: SET_USER_GUID });
    AsyncStorage.setItem("Guid", JSON.stringify(Guid));
  };

  const Commandes = useSelector((state) => state.Commandes);
  const { EnAttente } = Commandes;
  return (
    <View style={styles.container}>
      {loading ? (
        <SplashLaoder></SplashLaoder>
      ) : (
        <>
          <StatusBar backgroundColor={COLORS.Blanc} barStyle="dark-content" />

          {Guid ? (
            <HeaderAccueil
              name={data.customer.firstname}
              closeHeder={closeHeder}
            />
          ) : null}
          {!Guid ? <CategorySearch Nav={Nav} DisableHeader={Guid} /> : null}

          <ScrollView>
            {Guid ? <CategorySearch Nav={Nav} DisableHeader={Guid} /> : null}

            <Favoris Nav={Nav} />
            <Recents Nav={Nav} />
            <PubContainer />
            <BestAdresses Nav={Nav} />
            <DayOffer Nav={Nav} />
          </ScrollView>
          {EnAttente ? (
            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                bottom: 20,
                paddingHorizontal: 30,
                width: SIZES.width,
              }}
            >
              <PrimaryButton onPress={() => Nav("MesCommandes", null)}>
                Voir ma commande en cours{" "}
              </PrimaryButton>
            </View>
          ) : null}
        </>
      )}
    </View>
  );
};

export default Chercher;
