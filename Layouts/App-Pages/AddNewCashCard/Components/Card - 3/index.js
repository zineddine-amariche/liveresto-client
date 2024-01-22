import { View } from "react-native";
import React, { useRef } from "react";
import styles from "./Components/styles";
import { H4 } from "../../../../../Components/utils/TextComponents";
import { dataMesAdresses, dataMesAdressesEnreg, dataProfilePart3 } from "../../../../../Data";
import ItemAdresse from "../itemAdresse";
import InputSearch from "../../../../../Components/Inputs/Input - 1 (search)";
const CardA3 = () => {

  return (
    <View style={styles.container}>
      <InputSearch
        // onPress={() => Nav("FiltersSearchInput")}
        text={"Saisir une nouvelle adresse"}
      />
      <View style={styles.Space} />
      <H4>Mes adresses entregistrées</H4>

      {dataMesAdressesEnreg.map((item, ind) => {
        return (
          <View key={ind}>
            <ItemAdresse item={item} Divider={item.divider}  />
          </View>
        );
      })}
    </View>
  );
};

export default CardA3;
