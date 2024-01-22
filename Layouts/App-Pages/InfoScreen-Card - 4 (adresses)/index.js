import { View, Image, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import styles from "./Components/styles";
import backImg from "../../../Assets/Images/backImg.png";
import ArrowRightImg from "../../../Assets/Images/Arrow.png";
import InfoImgCircl from "../../../Assets/Images/InfoImgCircl.png";
import Moto from "../../../Assets/Images/moto.png";
import LinearGradient from "react-native-linear-gradient";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";
import {
  BoldTxt,
  FraisTxt,
  GoldTxt,
  H7,
  SmallBoldTxt,
} from "../../../Components/utils/TextComponents";
import { COLORS } from "../../../Components/Styles/theme";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../Components/utils/Buttons";
import { useRef } from "react";
import HView from "../../../Components/View/HView";
import { SIZES } from "../../../Components/constants/theme";
import { useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Actions/Products";
import { useDispatch } from "react-redux";

const InfoScreenC4 = ({ route, navigation, navigation: { goBack } }) => {
  const { item } = route.params;
  const Establishements = useSelector((state) => state.Establishements);
  const { ids } = Establishements;
  const auth = useSelector((state) => state.auth);
  const { data } = auth;
  const navTitleView = useRef(null);
  const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 1;
  const MAX_HEIGHT = SIZES.height / 3;

  const [Id, setId] = useState(null);
  const Generate = () => {
    var item = ids[Math.floor(Math.random() * ids.length)];
    setId(item);
  };
  const dispatch = useDispatch();

  let configHead = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      Authorization: `Bearer ${data.customer.token}`,
    },
  };

  useEffect(() => {
    if (Id) {
      getProducts(dispatch, configHead, Id);
    }
  }, [Id]);
  const Products = useSelector((state) => state.Products);
  const { loading, products } = Products;
  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Retour à l’accueil"} goBack={goBack} />
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.7}
        minOverlayOpacity={0.2}
        useNativeDriver={true}
        disableHeaderGrow={true}
        renderHeader={() => <Image source={backImg} style={styles.image} />}
      >
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(500)}
          onDisplay={() => navTitleView.current.fadeOut(1000)}
        >
          <HView spaceBetween>
            <H7 style={styles.textT1}>
              {Id ? products?.establishment?.title : item.title}
            </H7>
            <GoldTxt style={styles.Gold}>
              ⭐{" "}
              {Id ? products?.establishment?.ratings.rate : item?.ratings?.rate}
            </GoldTxt>
          </HView>
        </TriggeringView>

        <View style={{ padding: 20, height: SIZES.height / 2 }}>
          <SmallBoldTxt numberOfLines={7} style={styles.textT2}>
            {Id ? products?.establishment?.caption : item.caption}
          </SmallBoldTxt>
          <View style={styles.row}>
            <Image source={Moto} style={{ marginRight: 10 }} />
            <FraisTxt style={{ width: "90%" }} numberOfLines={1}>
              {Id ? products?.establishment?.address : item.address}
            </FraisTxt>
          </View>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.Vert3, COLORS.Blue2]}
            style={styles.BoxGradient}
          >
            <BoldTxt style={styles.TextGR}>Fermeture à 23h00</BoldTxt>
          </LinearGradient>
          <View style={styles.Info}>
            <View style={styles.row}>
              <Image source={InfoImgCircl} style={{ marginRight: 10 }} />
              <H7 style={styles.TxtInfo}>Informations complémentaires</H7>
            </View>
            <Image source={ArrowRightImg} />
          </View>
          <View style={styles.boxBtn}>
            <PrimaryButton
              opacity={1}
              onPress={() => {
                navigation.navigate("RestaurantDetails", {
                  id: Id ? products?.establishment?.id : item.id,
                });
              }}
            >
              Choisir un plat
            </PrimaryButton>
          </View>
        </View>
      </ImageHeaderScrollView>
      <View style={styles.Generate}>
        <SecondaryButton
          opacity={1}
          Bold={"700"}
          onPress={Generate}
          loading={loading}
        >
          Générer un autre restaurant
        </SecondaryButton>
      </View>
    </View>
  );
};

export default InfoScreenC4;

{
  /* <View style={styles.section}>
          <View style={styles.categories}>
            {itemData?.categories.map((category, index) => (
              <View style={styles.categoryContainer} key={index}>
                <FontAwesome name="tag" size={16} color="#fff" />
                <Text style={styles.category}>{category}</Text>
              </View>
            ))}
          </View>
        </View> */
}

{
  /* <View style={[styles.section, {height: 250}]}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex: 1}}
            region={{
              latitude: itemData.coordinate.latitude,
              longitude: itemData.coordinate.longitude,
              latitudeDelta: 0.00864195044303443,
              longitudeDelta: 0.000142817690068,
            }}>
            <MapView.Marker
              coordinate={itemData.coordinate}
              image={require('../../../Assets/Images/Check/RadioCheck.png')}
            />
          </MapView>
        </View> */
}
{
  /* <Text style={styles.title}>Overview</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <FontAwesome name="star" size={16} color="#FF6347" />
              <Text style={{marginHorizontal: 2}}>{item?.rating}</Text>
              <Text>({"itemData?.reviews"})</Text>
            </View> */
}

{
  /* <HeaderPrimary Title={"Retour à l’accueil"} goBack={ToHome} /> */
}
{
  /* <ScrollView> */
}

// <View style={styles.boxImg}>
//     <Image
//       source={backImg}
//       resizeMode="cover"
//       style={{ width: "100%" }}
//     />
//   </View>
//   <View style={styles.Body}>
//     <H7 style={styles.textT1}>{item.title}</H7>
//     <GoldTxt style={styles.Gold}>⭐ 4,7</GoldTxt>
//     <SmallBoldTxt style={styles.textT2}>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
//       tincidunt donec augue aenean eget arcu. Nec, ridiculus a faucibus
//       tempus id morbi blandit feugiat.
//     </SmallBoldTxt>
//     <View style={styles.row}>
//       <Image source={Moto} style={{ marginRight: 10 }} />
//       <FraisTxt>{item.Frais}</FraisTxt>
//     </View>
//     <LinearGradient
//       start={{ x: 1, y: 0 }}
//       end={{ x: 0, y: 1 }}
//       colors={[COLORS.Vert3, COLORS.Blue2]}
//       style={styles.BoxGradient}
//     >
//       <BoldTxt style={styles.TextGR}>Fermeture à 23h00</BoldTxt>
//     </LinearGradient>

//     <View style={styles.Info}>
//       <View style={styles.row}>
//         <Image source={InfoImgCircl} style={{ marginRight: 10 }} />
//         <H7 style={styles.TxtInfo}>Informations complémentaires</H7>
//       </View>
//       <Image source={ArrowRightImg} />
//     </View>
// <View style={styles.boxBtn}>
//   <PrimaryButton
//     opacity={1}
//     onPress={() => {
//       navigation.navigate("RestaurantDetails");
//     }}
//   >
//     Choisir un plat
//   </PrimaryButton>
// </View>
//   </View>

{
  /* </ScrollView> */
}
{
  /* 
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        headerImage={backImg}
        renderForeground={() => (
          <View
            style={{
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => console.log("tap!!")}>
              <Text style={{ backgroundColor: "transparent" }}>Tap Me!</Text>
            </TouchableOpacity>
          </View>
        )}
      >
        <View style={{ height: 1000 }}>
          <TriggeringView onHide={() => console.log("text hidden")}>
            <Text>Scroll Me!</Text>
          </TriggeringView>
        </View>
      </ImageHeaderScrollView> */
}
