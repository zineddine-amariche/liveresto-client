import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { H7 } from "../../../../../../../Components/utils/TextComponents";
import CheckBox from "../../../../../../../Components/CheckBox/useCheckBox";

const ItemRestrictions = ({item}) => {
  return (
    <TouchableOpacity style={styles.Item}>
      <View style={styles.Left}>
        <H7 style={styles.T2}>{item?.title}</H7>
      </View>
      <View style={styles.right}>
        <CheckBox  />
      </View>
    </TouchableOpacity>
  );
};

export default ItemRestrictions;
