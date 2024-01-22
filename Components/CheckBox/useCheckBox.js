import { Pressable, StyleSheet, View, Image } from "react-native";
import React from "react";
import check1 from "../../Assets/Images/Check/check1.png";
import check2 from "../../Assets/Images/Check/check2.png";

import checkimg from "../../Assets/Images/check.png";
import { COLORS } from "../Styles/theme";
const CheckBox = ({ checked, onPress, rounded, style, size,borderWidth }) => {
  return (
    <View style={styles.container} {...style}>
      <Pressable onPress={onPress}>
        {checked ? (
          <View style={{ width: size || 20, height: size || 20 }}>
            {!rounded ? <Image source={check2} /> : <Image source={checkimg} />}
          </View>
        ) : (
          <View style={{ width:size ||20, height:size|| 20 }}>
            {!rounded ? (
              <Image source={check1} />
            ) : (
              <View
                style={{
                  height: size||20,
                  width: size||20,
                  backgroundColor: "#eee",
                  borderRadius: 20,
                  borderWidth: borderWidth||1,
                  borderColor: COLORS.Vert3,
                }}
              ></View>
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    marginLeft: 10,
  },
});
