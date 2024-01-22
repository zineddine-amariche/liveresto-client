import { View, Text } from "react-native";
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Txt } from "../../../../../../Components/utils/TextComponents";

const ItemPlat = ({item}) => {
  return (
    <>
      <View style={styles.row2}>
        <Txt style={styles.TextT2}>×{item.Qt}</Txt>
        <Txt>{item.name}</Txt>
      </View>
      <View style={styles.Divider}></View>
    </>
  );
};

export default ItemPlat;

const styles = StyleSheet.create({

  row2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:20,
    marginVertical:10,
  
  },
  TextT2: {
    marginRight:10
  },
  Divider:{
    height:1,
    backgroundColor:"#000",
    width:"90%",
    alignSelf:"center",
    opacity:0.2
  },

});

