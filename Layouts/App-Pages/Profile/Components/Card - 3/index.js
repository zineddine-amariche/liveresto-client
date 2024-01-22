import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./Components/styles";
import CardMdGradient from "../../../../../Components/Cards/Card - 6 (gradien md )";
import { FraisTxt, H7 } from "../../../../../Components/utils/TextComponents";
import LogoSm from "../../../../../Assets/Images/LogoSm.png";
import Item from "../item";
import { dataProfilePart3 } from "../../../../../Data";
const CardP3 = ({Nav}) => {
  return (
    <View style={styles.container}>
      <CardMdGradient>
        Invite un amis pour avoir 15% sur ta prochaine commande
      </CardMdGradient>
      <View style={styles.points}>
        <View style={styles.BoxItem}>
          <View style={styles.Row}>
            <Image source={LogoSm} style={{marginRight:10}} />
            <H7 Bold="400">Mes Points Live</H7>
          </View>
          <FraisTxt style={{ fontSize: 14 }}>13</FraisTxt>
        </View>
        <FraisTxt style={{ fontSize: 14 }}>
          3 Points Live à gagner pour chaque commande{" "}
        </FraisTxt>
      </View>
      {dataProfilePart3.map((item, ind) => {
        return (
          <View key={ind}>
            <Item title={item.title} Divider={item.divider} Nav={Nav} item={item} />
          </View>
        );
      })}
    </View>
  );
};

export default CardP3;
