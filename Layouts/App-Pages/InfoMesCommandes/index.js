import { View } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import ItemRender from "./Components/item";
import { ImageBackground } from "react-native";
import Card4Img from "../../../Assets/Images/ComdRecentsDetails.png";
import { StyleSheet } from "react-native";
import {
  BoldTxt,
  FraisTxt,
  GoldTxt,
  H4,
  Txt,
} from "../../../Components/utils/TextComponents";
import { Image } from "react-native";
import { PrimaryButton } from "../../../Components/utils/Buttons";
import ImgMoto from "../../../Assets/Images/moto.png";
import HView from "../../../Components/View/HView";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../../Components/Styles/theme";
import GrisView from "../../../Components/View/GrisView";
import ItemArrowRight from "../../../Components/ItemRender/ItemArrowRight";
import ItemPlat from "./Components/itemPlat";
import { dataCommandes } from "../../../Data";
import { SIZES } from "../../../Components/constants/theme";
import { useRef } from "react";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";

const InfoMesCommandes = ({ navigation, navigation: { goBack }, route }) => {
  const { item } = route.params;

  const Nav = (path) => {
    navigation.navigate(path);
  };

  const navTitleView = useRef(null);
  const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 10;
  const MAX_HEIGHT = SIZES.height / 3;

  return (
    <View style={styles.Bigcontainer}>
      <HeaderPrimary Title={"Ma commande récente"} goBack={goBack} />
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.7}
        minOverlayOpacity={0.2}
        useNativeDriver={true}
        disableHeaderGrow={true}
        renderHeader={() => <Image source={Card4Img} style={styles.image} />}
      >
          <GrisView style={styles.cardInfo}>
            <View style={styles.bottom}>
              <HView spaceBetween>
                <H4>La Lune de Béjaïa</H4>
                <GoldTxt>⭐ 4,7</GoldTxt>
              </HView>
              <View style={styles.P10} />
              <Txt>Cuisine Algérienne, spécialités Kabyle</Txt>
              <View style={styles.P10} />
              <HView>
                <Image source={ImgMoto} style={{ marginRight: 10 }} />
                <FraisTxt>30-40 min | Frais de livraison : 10,00€</FraisTxt>
              </HView>
              <View style={styles.P10} />
              <LinearGradient
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={[COLORS.Vert3, COLORS.Blue2]}
                  style={styles.BoxGradient}
                >
                  <BoldTxt style={styles.TextGR}>Fermeture à 23h00</BoldTxt>
                </LinearGradient>
              <View style={styles.P10} />
              <ItemArrowRight
                title={"Informations complémentaires"}
                Nav={Nav}
              />
            </View>
          </GrisView>


          <GrisView style={styles.cardInfo}>
            <ItemRender item={item} key={item.id} />
          </GrisView>

          <GrisView style={styles.cardInfo}>
            {dataCommandes.map((item) => {
              return <ItemPlat item={item} key={item.id} />;
            })}
            <View style={styles.BoxButton}>
              <PrimaryButton  >Commander à nouveau</PrimaryButton>
            </View>
          </GrisView>
          </ImageHeaderScrollView>

          <View style={styles.space} />
    </View>
  );
};

export default InfoMesCommandes;

{
  /* <View style={styles.container}>
              <View style={styles.row2}>
                <Avatar
                  size={40}
                  rounded
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.9}
                  containerStyle={styles.Avatar}
                  source={ImgAvatar}
                />
                <Txt>Votre livraison par Ben</Txt>
              </View>
              <View style={styles.row2}>
                <Image source={ImgMoto} style={{ marginRight: 15 }} />
                <Txt>Livraison dans 30 - 40 min </Txt>
              </View>
            </View> */
}
{
  /* <View style={styles.container}>
              <View style={styles.BoxButton}>
                <PrimaryButton>Voir le reçu</PrimaryButton>
              </View>
            </View> */
}
