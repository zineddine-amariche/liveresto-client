import {  TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import { H7 } from "../../../../../../../Components/utils/TextComponents";

const Item = ({ item }) => {
  return (
    <TouchableOpacity style={styles.Item}>
      <H7 style={styles.T2}>{item.name}</H7>
    </TouchableOpacity>
  );
};

export default Item;
