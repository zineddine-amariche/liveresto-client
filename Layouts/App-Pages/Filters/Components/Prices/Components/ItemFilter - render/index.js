import { TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "../styles";
import { H7 } from "../../../../../../../Components/utils/TextComponents";
import { COLORS } from "../../../../../../../Components/Styles/theme";

const Item = ({ item, isChecked, HandelChange }) => {
  return (
    <View style={styles.ItemBox}>
      <TouchableOpacity
        style={[
          styles.Item,
          { backgroundColor: isChecked ? COLORS.Vert6 : COLORS.Blanc },
        ]}
        onPress={HandelChange}
      >
        <H7 style={{ color: isChecked ? COLORS.Blue0 : COLORS.Noir }}>
          {item.name}
        </H7>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
