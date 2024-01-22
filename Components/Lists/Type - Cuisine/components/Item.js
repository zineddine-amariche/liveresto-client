import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { H7 } from "../../../utils/TextComponents";
import { COLORS } from "../../../Styles/theme";

const ItemRender = ({ item, isChecked, HandelChange }) => {
  const { height, width } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={[styles.Flags, { width: width / 4 }]}
      key={item.Id}
      onPress={HandelChange}
    >
      <Image source={item.img} />

      <H7
        style={{
          fontWeight: "700",
          color: isChecked ? COLORS.Vert3 : COLORS.Noir,
        }}
      >
        {item.name}
      </H7>
    </TouchableOpacity>
  );
};

export default ItemRender;

const styles = StyleSheet.create({
  Flags: {
    alignItems: "center",
    marginVertical: 5,
  },
  FlagsText: {},
});
