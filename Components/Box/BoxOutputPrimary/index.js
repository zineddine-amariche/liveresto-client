

import React from "react";
import { H7, Txt } from "../../utils/TextComponents";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../../Styles/theme";
import { Text } from "react-native";
import * as Animatable from "react-native-animatable";

const BoxOutputPrimary = ({
  Label,
  name,
  value,
  placeholder,
  onBlur,
  onChangeText,
  width,
  check,
  style,
  hidePass,
  isPassword,
  HandlehidePass,
  errors,
  touched,
  placeholderTextColor,
  editable
}) => {
  return (
    <View style={styles.containerForm}>
      <H7 style={styles.label}>{Label}</H7>
      <View style={styles.row}>
        <TextInput
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          numberOfLines={1}
          name={name}
          id={name}
          value={value}
          onBlur={onBlur}
          onChangeText={onChangeText}
          {...style}
          secureTextEntry={hidePass ? true : false}
          editable={editable}
        />

        {check === "NonCheck" && (
          <View style={{ position: "absolute", right: 10 }}>
            <Txt color={COLORS.Rouge}>Non Verify</Txt>
          </View>
        )}
        {check === true && (
          <View style={{ position: "absolute", right: 10 }}>
            <Txt color={COLORS.Sccess}>Verify</Txt>
          </View>
        )}
        {isPassword == "pass" ? (
          hidePass ? (
            <Text style={styles.iconPass} onPress={HandlehidePass}>
              🙈
            </Text>
          ) : (
            <Text style={styles.iconPass} onPress={HandlehidePass}>
              👁
            </Text>
          )
        ) : null}
      </View>

      {errors && touched ? (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.error}>{errors} </Text>
        </Animatable.View>
      ) : null}
    </View>
  );
};

export default BoxOutputPrimary;

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
  },

  label: {
    fontWeight: "700",
    marginVertical: 10,
  },
  error: {
    color: COLORS.Rouge,
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 13,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  iconPass: {
    color: "#aac840",
    fontSize: 20,
    position: "absolute",
    right: 10,
    top: 8,
    zIndex: 100,
  },
});
