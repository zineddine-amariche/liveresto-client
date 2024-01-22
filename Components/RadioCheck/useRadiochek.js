import { Pressable, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import RadioCheckImg from "../../Assets/Images/Check/RadioCheck.png";
import RadioUnCheckImg from "../../Assets/Images/Check/RadioUnCheck.png";
import { COLORS } from "../Styles/theme";

const RadioCheck = ({ checked, onPress, index, HandelChange, item }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        HandelChange(index, item);
      }}
    >
      <View style={styles.container}>
        <View >
          {checked ? (
            <View
              style={{
                width: 20,
                height: 20,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                borderColor: COLORS.Vert2,
                borderRadius: 20,
                marginRight: 10,
              }}
            >
              <View
                style={{
                  height: 18,
                  width: 18,
                  backgroundColor: COLORS.Vert2,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: COLORS.Blanc,
                }}
              ></View>
            </View>
          ) : (
            <View style={{ width: 20, height: 20, marginRight: 10 }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  backgroundColor: COLORS.Blanc,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: COLORS.Vert2,
                }}
              ></View>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RadioCheck;

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
