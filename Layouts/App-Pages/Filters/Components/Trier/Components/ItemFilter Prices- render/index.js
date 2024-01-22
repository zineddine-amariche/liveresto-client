import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { H7 } from "../../../../../../../Components/utils/TextComponents";
import CheckBox from "../../../../../../../Components/CheckBox/useCheckBox";

const ItemPrices = ({ item, handleOnChange, index, checkedState }) => {
  return (
    <TouchableOpacity
      style={styles.Item}
      onPress={() => {
        handleOnChange(index, item);
      }}
    >
      <View style={styles.Left}>
        <H7 style={styles.T2}>{item.name}</H7>
      </View>

      <CheckBox
        onPress={() => {
          handleOnChange(index, item);
        }}
        checked={checkedState[index]}
        index={index}
        rounded
      />
    </TouchableOpacity>
  );
};

export default ItemPrices;
