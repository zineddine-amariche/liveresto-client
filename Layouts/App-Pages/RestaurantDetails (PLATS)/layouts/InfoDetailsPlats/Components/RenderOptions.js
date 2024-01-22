import { View, Text } from "react-native";
import React from "react";
import CheckBox from "../../../../../../Components/CheckBox/useCheckBox";
import HView from "../../../../../../Components/View/HView";
import { StyleSheet } from "react-native";
import { Txt } from "../../../../../../Components/utils/TextComponents";

const RenderOptions = ({ item }) => {
  return (
    <HView style={styles.Hview}>
      <CheckBox rounded style={styles.CheckBox} size={17} borderWidth={2}/>
      <Txt>{item.name}</Txt>
    </HView>
  );
};

export default RenderOptions;

const styles = StyleSheet.create({
  Hview: {
    marginVertical: 5,
  },
  CheckBox:{
    marginRight:10,
  }
});
