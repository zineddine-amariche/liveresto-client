import { FlatList, View } from "react-native";
import React from "react";
import styles from "./Components/styles";
import { H4 } from "../../../../../Components/utils/TextComponents";
import {
  dataMesAdresses,
  dataMesAdressesEnreg,
  dataProfilePart3,
  PubData,
} from "../../../../../Data";
import ItemAdresse from "../itemAdresse";
import InputSearch from "../../../../../Components/Inputs/Input - 1 (search)";
import CardPub from "../../../../../Components/Cards/Card - 3 (Pub)";
const CardCodePromos = ({ Nav }) => {
  return (
    <View style={styles.container}>

      {PubData.map((item, ind) => {
        return (
          <View key={ind}>
            <CardPub item={item} Nav={Nav} />
          </View>
        );
      })}
    </View>
  );
};

export default CardCodePromos;
