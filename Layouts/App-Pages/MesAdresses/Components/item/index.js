import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ArrowG from "../../../../../Assets/Images/ArrowG.png";
import { StyleSheet } from "react-native";
import { H7 } from "../../../../../Components/utils/TextComponents";
import { COLORS } from "../../../../../Components/Styles/theme";

const Item = ({ title, Divider, last,Nav ,item}) => {
  let pos = "position"
  return (
    <>
      <TouchableOpacity style={styles.item} onPress={()=>{Nav(item?.Path,pos)}}>
        <View>
          <H7 Bold="400" style={{color : title === "📤  Déconnexion" ? COLORS.Rouge : COLORS.Noir}}>{title}</H7>
        </View>
        {last ? null : <Image source={ArrowG} />}
      </TouchableOpacity>
      {Divider ? <View style={styles.Divider} /> : null}
    </>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: 5,
    marginVertical: 15,
  },
  Divider: {
    height: 1,
    opacity: 0.2,
    backgroundColor: COLORS.Noir,
  },
});
