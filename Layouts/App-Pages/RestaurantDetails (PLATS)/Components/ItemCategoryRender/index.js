import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../../../Components/Styles/theme";
import { Txt } from "../../../../../Components/utils/TextComponents";
import WhiteView from "../../../../../Components/View/WhiteView";
import { TouchableOpacity } from "react-native";

const ItemCategoryRender = ({ item,SelecteItem,ItemSelect,index ,ScrolToHandeler}) => {


  
  return (
    <TouchableOpacity
      onPress={() => {
        SelecteItem(item.title);
        ScrolToHandeler(index)
      }}
    >
      <WhiteView
        style={{
          backgroundColor:
            ItemSelect === item.title ? COLORS.Vert3 : COLORS.Blanc,
          borderRadius: 25,
          justifyContent: "center",
          paddingHorizontal: 15,
          marginRight: 10,
          paddingVertical: 6,
          marginLeft: 3,
        }}
      >
        <Txt color={ItemSelect === item.title ? COLORS.Blanc : COLORS.Noir}>{item.title}</Txt>
      </WhiteView>
    </TouchableOpacity>
  );
};

export default ItemCategoryRender;

const styles = StyleSheet.create({
  ItemBac: {
    borderRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginRight: 10,
    paddingVertical: 6,
    marginLeft: 3,
  },
});
