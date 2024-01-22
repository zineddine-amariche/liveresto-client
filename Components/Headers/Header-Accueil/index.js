import { View,  ImageBackground, StyleSheet } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import { H5, Txt } from "../../utils/TextComponents";
import Bacimage from "../../../Assets/Images/Ellipse.png";
import { ButtonRound, PrimaryButton } from "../../utils/Buttons";

const HeaderAccueil = ({ closeHeder ,  name }) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Bacimage}
        resizeMode="cover"
        style={[styles.image, { ...StyleSheet.absoluteFillObject }]}
      ></ImageBackground>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 20,
          justifyContent: "center",
          paddingHorizontal:25
        }}
      >
        <ButtonRound isPrimary={true}>En livraison</ButtonRound>
        <ButtonRound>Sur place</ButtonRound>
      </View>
      <View style={styles.containerUser}>
        <H5 style={styles.UserNameText} fontWeight="700" >Salut {name} 👋</H5>
        <Txt style={styles.UserText}>
          Tu ne sais pas quoi manger ? Laisse le hasard te guider !
        </Txt>
        <PrimaryButton style={styles.Button} opacity={1} onPress={closeHeder} fontWeight="700" >
          C’est parti !
        </PrimaryButton>
      </View>
    </View>
  );
};

export default HeaderAccueil;
