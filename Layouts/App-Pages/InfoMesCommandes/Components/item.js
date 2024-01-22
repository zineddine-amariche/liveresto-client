import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Txt } from "../../../../Components/utils/TextComponents";

const Item = ({ item }) => {
  return (
    <View style={styles.container}>
      <Txt>3 articles |</Txt>
      <Txt>38,70 € |</Txt>
      <Txt>20 septembre 2020</Txt>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
