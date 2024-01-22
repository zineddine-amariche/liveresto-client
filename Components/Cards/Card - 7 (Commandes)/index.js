import { View, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import Card4Img from "../../../Assets/Images/Addresses.png";
import { H4, Txt } from "../../utils/TextComponents";
import { TouchableOpacity } from "react-native";
import Item from "./Components/item";
import { dataCommandes } from "../../../Data";
import { Avatar } from "react-native-elements";
import ImgAvatar from "../../../Assets/Images/ImgAvatar.png";
import ImgMoto from "../../../Assets/Images/moto.png";
import { Image } from "react-native";
import { PrimaryButton } from "../../utils/Buttons";

const CommadesCard = ({ item, onPress }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          // onPress
        }}
      >
        <View style={styles.top}>
          <ImageBackground
            style={{ ...StyleSheet.absoluteFillObject }}
            source={Card4Img}
            resizeMode="cover"
          />
        </View>
        <View style={styles.bottom}>
          <H4 style={styles.TextT1}>Commande #839200</H4>
          <View style={styles.row}>
            <Txt Bold="700">La Lune de Béjaïa |</Txt>
            <Txt Bold="700">Total : 38,70€</Txt>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        {dataCommandes.map((item , ind) => {
          return <Item item={item} key={item.id} index={ind} last={dataCommandes.length-1} />;
        })}
      </View>
      <View style={styles.container}>
        <View style={styles.row2}>
          <Avatar
            size={40}
            rounded
            // icon={{ name: "user", type: "font-awesome", color: "#ccc" }}
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
      </View>
      <View style={styles.container}>
        <View style={styles.BoxButton}> 
          <PrimaryButton onPress={onPress}>Voir le reçu</PrimaryButton>
        </View>
      </View>
      <View style={styles.space} />

    </>
  );
};

export default CommadesCard;
