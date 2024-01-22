import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../../../Components/Styles/theme";
import PrimaryInput from "../../../Components/Inputs/inputs - 2 (primary)";
import { Formik } from "formik";
import { PrimaryButton } from "../../../Components/utils/Buttons";
import { UseForgot } from "./Components/Hooks";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";
import Space from "../../../Components/Space";

const ConfirmPassword = ({ navigation }) => {
  const {
    initialState,
    validationSchemaPassword,
    onSubmit,
    HandlehidePass,
    hidePass,
    c_hidePass,
    HandlehideC_Pass,
  } = UseForgot();
  const auth = useSelector((state) => state.auth);
  const { loading } = auth;
  const isFocused = useIsFocused();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.boxTitle}>
          <Text style={styles.BigTitle}>Confirm password </Text>
          {/* <Text>E-mail ou numéro de téléphone enregistré</Text> */}
          <View style={{ height: 30 }} />
        </View>

        <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
          <Formik
            initialValues={initialState}
            validationSchema={validationSchemaPassword}
            onSubmit={(values, formikAction) => {
              onSubmit(values);
              navigation.navigate("ConfirmPassword");
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
              isSubmitting,
              setErrors,
            }) => {
              const { newPassword, c_password } = values;
              return (
                <View style={{ flex: 1, margin: 2 }}>
                  <PrimaryInput
                    placeholder="Saisissez votre mot de passe"
                    style={styles.Input}
                    name={newPassword}
                    id={newPassword}
                    value={newPassword}
                    onBlur={handleBlur("newPassword")}
                    onChangeText={handleChange("newPassword")}
                    Label="Mot de passe"
                    secureTextEntry={hidePass ? true : false}
                    isPassword={"pass"}
                    hidePass={hidePass}
                    HandlehidePass={HandlehidePass}
                    errors={errors.newPassword}
                    touched={touched.newPassword}
                    placeholderTextColor={COLORS.Noir}
                  />
                  <Space space={90} />
                  <PrimaryInput
                    placeholder="Entrez le nouveau mot de passe"
                    style={styles.Input}
                    name={c_password}
                    id={c_password}
                    value={c_password}
                    onBlur={handleBlur("c_password")}
                    onChangeText={handleChange("c_password")}
                    Label="Nouveau mot de passe"
                    secureTextEntry={c_hidePass ? true : false}
                    isPassword={"pass"}
                    hidePass={c_hidePass}
                    HandlehidePass={HandlehideC_Pass}
                    errors={errors.c_password}
                    touched={touched.c_password}
                    placeholderTextColor={COLORS.Noir}
                  />
                  <Space space={90} />
                  <PrimaryButton
                    opacity={1}
                    style={{ marginVertical: 20 }}
                    onPress={() => {
                      handleSubmit();
                      setTimeout(() => {
                        if (!isFocused) {
                          setErrors("");
                        }
                      }, 1000);
                    }}
                    loading={loading}
                  >
                    Confirmer
                  </PrimaryButton>
                </View>
              );
            }}
          </Formik>
        </Animatable.View>
      </SafeAreaView>
    </View>
  );
};

export default ConfirmPassword;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  boxTitle: {
    flex: 1 / 3,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  BigTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.Noir,
  },
  containerForm: {
    padding: 20,

    flex: 1 / 2,
  },
  Input: {
    backgroundColor: COLORS.Blanc,
    color: COLORS.Noir,
    borderRadius: 6,
    paddingLeft: 10,
    width: "100%",
    height: 40,
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
    fontSize: 14.4,
    flex: 1,
  },
});
