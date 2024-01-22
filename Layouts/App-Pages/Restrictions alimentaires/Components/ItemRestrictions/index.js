import { View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import CheckBox from "../../../../../Components/CheckBox/useCheckBox";
import { Txt } from "../../../../../Components/utils/TextComponents";


const ItemRestrictions = ({ item, handleOnChange, index, checkedState }) => {
  return (
    <TouchableOpacity
      style={styles.Item}
      onPress={() => {
        handleOnChange(index, item);
      }}
    >
      <View style={styles.Left}>
        <Txt style={styles.T2}>{item?.title}</Txt>
      </View>
      <View style={styles.right}>
        <CheckBox
          onPress={() => {
            handleOnChange(index, item);
          }}
          checked={checkedState[index]}
          index={index}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemRestrictions;
