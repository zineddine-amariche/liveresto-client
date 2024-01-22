import { View } from "react-native";
import React from "react";
import styles from "./Components/styles";

import {DATAResults } from "../../../../../Data";
import FavorisAdressesCard from "../../../../../Components/Cards/Card - 4 (adresses)";

const CradsOffres = ({ Nav }) => {
  return (
    <View style={styles.container}>
        {DATAResults.map((item, ind) => {
          return (
            <View key={ind}>
              <FavorisAdressesCard item={item} Nav={Nav} />
            </View>
          );
        })}
    </View>
  );
};

export default CradsOffres;
