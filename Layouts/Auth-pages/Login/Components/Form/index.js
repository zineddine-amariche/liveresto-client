import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { UseLogin } from "../../Hooks/UseLogin";
import styles from "./Styles";
import CheckBox from "react-native-check-box";
import * as Animatable from "react-native-animatable";
import { PrimaryButton } from "../../../../../Components/utils/Buttons";
import { COLORS } from "../../../../../Components/Styles/theme";
import {
  DarkTxt,
  H7,
} from "../../../../../Components/utils/TextComponents";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import PrimaryInput from "../../../../../Components/Inputs/inputs - 2 (primary)";

const FormLogin = ({navigation}) => {
  const {
    loginValues,
    validationSchema,
    isSelected,
    hadelChnageCheck,
    hidePass,
    HandlehidePass,
    onSubmit,
  } = UseLogin();
  const auth = useSelector((state) => state.auth);
  const { loading } = auth;
  const isFocused = useIsFocused();

  return (
    <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
      <Formik
        initialValues={loginValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          onSubmit(values);
          // formikAction.setSubmitting(false);
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
          const { email, password } = values;
          return (
            <View style={{ flex: 1, margin:2 }}>
              <PrimaryInput
                Label="Adresse e-mail"
                placeholder="Saisissez votre email"
                numberOfLines={1}
                style={styles.Input}
                name={email}
                id={email}
                value={email}
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                errors={errors.email}
                touched={touched.email}
                placeholderTextColor={COLORS.Noir}
              />

              <PrimaryInput
                placeholder="Saisissez votre mot de passe"
                style={styles.Input}
                name={password}
                id={password}
                value={password}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                Label="Mot de passe"
                secureTextEntry={hidePass ? true : false}
                isPassword={"pass"}
                hidePass={hidePass}
                HandlehidePass={HandlehidePass}
                errors={errors.password}
                touched={touched.password}
                placeholderTextColor={COLORS.Noir}
              />

              <View style={styles.left}>
                <CheckBox
                  isChecked={isSelected}
                  onClick={hadelChnageCheck}
                  style={styles.checkbox}
                  checkBoxColor={COLORS.Noir}
                />
                <DarkTxt style={styles.labelText}>Se souvenir de moi ?</DarkTxt>
              </View>

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
                Se connecter
              </PrimaryButton>

              <View style={styles.Identifiants}>
                <TouchableOpacity 
                onPress={()=>{
                  navigation.navigate('ForgotPassword')
                }} 
                style={styles.leftLink}
                
                >
                  <DarkTxt style={styles.textRight}>
                    Mot de passe oublié?
                  </DarkTxt>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightLink}>
                  <DarkTxt style={styles.textRight}>
                    Contacter Live Resto?
                  </DarkTxt>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
    </Animatable.View>
  );
};

export default FormLogin;
