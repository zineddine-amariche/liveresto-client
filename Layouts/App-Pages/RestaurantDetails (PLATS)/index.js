import { View, StatusBar, Animated, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import { useRef } from "react";

import SafeAreaView from "react-native-safe-area-view";

import BodyAnimated from "./Components/BodyAnimated";
import ImageBackgroundAnimated from "./Components/ImageBackgroundAnimated";
import HeaderCategory from "./Components/HeaderCategory";
import { useSelector } from "react-redux";
import { H5, H7, Txt } from "../../../Components/utils/TextComponents";
import { COLORS } from "../../../Components/Styles/theme";
import { getProducts } from "../../../Redux/Actions/Products";
import { useDispatch } from "react-redux";
import ModalPrimary from "../../../Components/Models/ModelPrimary";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../Components/utils/Buttons";
import HView from "../../../Components/View/HView";
import { FixdelAllCarts } from "../../../Redux/Actions/panier/FixAddToCartAcions";


const RestaurantDetails = ({ route, navigation, navigation: { goBack } }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  // console.log('id', id)

  // dispatch id_Establishemnt to Validation order

  const Nav = (path, item) => {
    navigation.navigate(path, { item });
  };
  const scroll = useRef(new Animated.Value(0)).current;
  const Products = useSelector((state) => state.Products);
  const { loading, products } = Products;
  // console.log('products', products)
  const { Carts, restaurantSelected } = useSelector((state) => state.FixCarts);

  const produit = useSelector((state) => state.OrderObjet);
  // console.log("produit", produit);

  const auth = useSelector((state) => state.auth);
  const { data } = auth;

  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: `Bearer ${data.customer.token}`,
    },
  };

  const navigationTo = (path) => {
    navigation.navigate(path);
  };




  const [Ref, setRef] = useState(null);
  const [dataSourceCorde, setdataSourceCorde] = useState([]);

  const ScrolToHandeler = (index) => {
    if (dataSourceCorde.length > index) {
      Ref.scrollTo({
        x: 0,
        y: dataSourceCorde[index] + 220,
        Animated: true,
      });
    } else {
      console.log("out");
    }
  };
  const setRefer = (ref) => {
    setRef(ref);
  };

  const setCords = (Corde) => {
    setdataSourceCorde(Corde);
  };

  const [ShowModal, setShowModal] = useState(false);

  const onDissmis = () => {
    setShowModal(false);
  };

  const onShow = () => {
    setShowModal(true);
  };

  useEffect(() => {
    getProducts(dispatch, configHead, id);
  }, [id]);


  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
        <StatusBar translucent={true} backgroundColor={"transparent"} />
        {loading ? (
          <View style={styles.loader}>
            <Txt color={COLORS.Vert2}>Chargement ...</Txt>
          </View>
        ) : (
          products && (
            <>
              <ImageBackgroundAnimated
                scroll={scroll}
                goBack={goBack}
                products={products}
                title={products?.establishment?.title}
                rate={products?.establishment?.ratings.rate}
                speciality={products?.establishment?.speciality}
                caption={products?.establishment?.caption}
                navigationTo={navigationTo}
              />
              <HeaderCategory
                scroll={scroll}
                products={products}
                ScrolToHandeler={ScrolToHandeler}
              />
              <BodyAnimated
                scroll={scroll}
                products={products}
                Nav={Nav}
                Ref={Ref}
                setRefer={setRefer}
                dataSourceCorde={dataSourceCorde}
                setCords={setCords}
                onShow={onShow}
                title={products?.establishment?.title}
                id={id}
                navigation={navigation}
              />
            </>
          )
        )}
        <ModalPrimary visible={ShowModal} onDissmis={onDissmis}>
          <View style={styles.model}>
            <H5 color={COLORS.Rouge}>Attention :</H5>
            <Txt fontSize={17} style={styles.text}>
              Vous avez déjà des produits d'un autre restaurant ({" "}
              <Txt color={COLORS.Vert2}>{restaurantSelected}</Txt> ) Confirmez
              l'achat, ou videz le panier pour changer de restaurant
            </Txt>
          </View>
          <HView spaceBetween style={styles.BoxBtn}>
            <SecondaryButton style={styles.scd} onPress={onDissmis}>
              annuler
            </SecondaryButton>
            <PrimaryButton
              onPress={() => {
                FixdelAllCarts(Carts, dispatch);
                onDissmis();
              }}
              width={"45%"}
            >
              Valider
            </PrimaryButton>
          </HView>
        </ModalPrimary>
      </SafeAreaView>
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  model: {
    padding: 20,
  },
  text: {
    marginTop: 16,
  },
  BoxBtn: {
    padding: 20,
  },
  scd: {
    paddingHorizontal: 30,
  },
});

// console.log('Carts', Carts)
// console.log("data", data);

// let order = {
//   customer_id: "",
//   establishment_id: "",
//   for_when: "",
//   delivery_address_id: "",
//   bill_address_id: "",
//   voucher_code: "",
//   use_loyalty: "",
//   comment: "",
//   origin_id: "",
//   total: "",
// };

// "products": [
//     {
//         "id": 2323,
//         "quantity": 3,
//         "comment": null,
//         "extras": null
//     },
//     {
//         "id": 2318,
//         "quantity": 4,
//         "comment": null,
//         "extras": null
//     },
//     {
//         "id": 2768,
//         "quantity": 2,
//         "comment": null,
//         "extras": null
//     }
// ],
