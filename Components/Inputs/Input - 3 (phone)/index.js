import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../Styles/theme";
import { useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import { H7 } from "../../utils/TextComponents";

const InpuPhoneNumber = ({
  mobile_phone,
  setFieldValue,
  handleChange,
  handleBlur,
  errors,
}) => {
  const phoneInput = useRef(null);
  const [formattedValue, setFormattedValue] = useState("");

  return (
    <View style={styles.LoginText}>
      <H7 style={styles.label}>{"Numéro téléphone"}</H7>
      <View style={styles.input}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={mobile_phone}
          defaultCode="DZ"
          layout="first"
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
            setFieldValue("mobile_phone", text);
          }}
          withDarkTheme
          onBlur={handleBlur("mobile_phone")}
          onChangeText={handleChange("mobile_phone")}
          // autoFocus
          containerStyle={{
            alignSelf: "center",
            borderRadius: 8,
            borderColor: COLORS.primary,
            overflow: "hidden",
            height: 50,
            backgroundColor: "#FFF",
            marginVertical: 6,
            margin: 6,
            width: "99%",
          }}
          textContainerStyle={{
            color: COLORS.Blanc,
          }}
          textInputStyle={{
            color: COLORS.Noir,
            height: 50,
            flex: 1,
          }}
          codeTextStyle={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 13,
          }}
        />
      </View>
      {errors.mobile_phone ? (
        <Text style={[styles.error, { paddingTop: 9 }]}>
          {errors.mobile_phone}
        </Text>
      ) : null}
    </View>
  );
};

export default InpuPhoneNumber;

const styles = StyleSheet.create({
  error: {
    color: COLORS.Rouge,
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 13,
  },
  LoginText: {
    backgroundColor: COLORS.Blanc,
    marginTop: 10,
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: COLORS.Blanc,
    height: 50,
    width: "98%",
    alignSelf: "center",
    borderRadius: 6,
    marginTop: 10,
  },
});
