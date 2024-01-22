import { View } from "react-native";
import React from "react";
import styles from "./Components/styles";
import { H7, Txt } from "../../../../../Components/utils/TextComponents";

import HView from "../../../../../Components/View/HView";
import { COLORS } from "../../../../../Components/Styles/theme";
import CheckBox from "../../../../../Components/CheckBox/useCheckBox";
import { Image } from "react-native";
import LogoSm from "../../../../../Assets/Images/LogoSm.png";
const CardA4 = () => {
  return (
    <View style={styles.container}>
      <H7>Mes adresses entregistrées</H7>
      <HView spaceBetween style={styles.conatinerOne}>
        <Txt>💳 .... .... .... 0000</Txt>
        <Txt fontSize={14} color={COLORS.Vert3}>
          Modifier
        </Txt>
      </HView>
      <HView spaceBetween style={styles.conatinerOne}>
        <HView>
          <CheckBox />
          <Txt style={{ paddingBottom: 4 }}>Utiliser mes Points Live</Txt>
        </HView>

        <HView spaceBetween style={{ width: 40 }}>
          <Image source={LogoSm} />
          <Txt fontSize={14} color={COLORS.Vert3}>
            12
          </Txt>
        </HView>
      </HView>
    </View>
  );
};

export default CardA4;
