import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { UseLogin } from "../../Hooks/UseRegister";
import styles from "./Styles";
import * as Animatable from "react-native-animatable";
import { PrimaryButton } from "../../../../../Components/utils/Buttons";
import { COLORS } from "../../../../../Components/Styles/theme";
import { Picker as SelectPicker } from "@react-native-picker/picker";

import {
  DarkTxt,
  H7,
  Txt,
} from "../../../../../Components/utils/TextComponents";
import { useSelector } from "react-redux";
import PrimaryInput from "../../../../../Components/Inputs/inputs - 2 (primary)";

import RadioCheck from "../../../../../Components/RadioCheck/useRadiochek";
import DateHandler from "../date";
import { radioButtonsData } from "../../../../App-Pages/MesInformations/data";
import { champsRefer } from "../../data";
import InpuPhoneNumber from "../../../../../Components/Inputs/Input - 3 (phone)";

const FormLogin = () => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [currentSelectedItem, setCurrentSelectedItem] = useState(null);

  const HandelChange = (idx) => {
    setCurrentSelectedItem(idx);
  };

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  const {
    loginValues,
    validationSchema,
    hidePass,
    hidePass2,
    HandlehidePass,
    HandlehidePass2,
    onSubmit,
  } = UseLogin();

  const auth = useSelector((state) => state.auth);
  const { isAuth, loading } = auth;
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
          setFieldValue,
        }) => {
          const {
            firstname,
            lastname,
            gender,
            referer,
            birthday,
            password,
            mobile_phone,
            email,
            password_check,
          } = values;

          return (
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 2,
                }}
              >
                <PrimaryInput
                  Label="Nom*"
                  placeholder="Saisissez votre Nom"
                  name={firstname}
                  value={firstname}
                  style={styles.Input}
                  onBlur={handleBlur("firstname")}
                  onChangeText={handleChange("firstname")}
                  errors={errors.firstname}
                  touched={touched.firstname}
                  placeholderTextColor={COLORS.Noir}
                />
                <PrimaryInput
                  Label="Prénom*"
                  placeholder="Saisissez votre Prénom"
                  name={lastname}
                  value={lastname}
                  style={styles.Input}
                  onBlur={handleBlur("lastname")}
                  onChangeText={handleChange("lastname")}
                  errors={errors.lastname}
                  touched={touched.lastname}
                  placeholderTextColor={COLORS.Noir}
                />
              </View>

              <View
                style={{
                  marginTop: 10,
                }}
              >
                <H7 style={styles.label}>{"Genre*"}</H7>
                <View
                  style={{
                    marginVertical: 10,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  {radioButtons.map((item, index) => {
                    let isChecked =
                      currentSelectedItem === index ? true : false;

                    return (
                      <RenderItem
                        item={item}
                        index={index}
                        HandelChange={() => {
                          HandelChange(index, item.value);
                          setFieldValue("gender", item.value);
                        }}
                        isChecked={isChecked}
                        key={index}
                      />
                    );
                  })}
                </View>
                {errors.gender && touched.gender ? (
                  <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.error}>{errors.gender} </Text>
                  </Animatable.View>
                ) : null}
              </View>
              <View
                style={{
                  marginTop: 10,
                }}
              >
                <H7>{"Date de naissance*"}</H7>
                <DateHandler setFieldValue={setFieldValue} />

                {errors.birthday ? (
                  <Text style={styles.error}>{errors.birthday}</Text>
                ) : null}
              </View>
              <View
                style={{
                  marginTop: 10,
                }}
              >
                <H7 style={styles.label}>
                  {"Comment avez-vous connu Live Resto ?*"}
                </H7>

                <View
                  style={{
                    flex: 1,
                    backgroundColor: COLORS.Blanc,
                    borderRadius: 6,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 10,
                      height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                    marginHorizontal: 3,
                    marginVertical: 10,
                  }}
                >
                  <SelectPicker
                    enabled={true}
                    mode="dropdown"
                    selectedValue={referer}
                    itemStyle={{ borderWidth: 1, borderColor: COLORS.Vert2 }}
                    onValueChange={(itemValue, itemIndex) => {
                      setFieldValue("referer", itemValue);
                    }}
                  >
                    {champsRefer.map((item) => {
                      return (
                        <SelectPicker.Item
                          label={item.name.toString()}
                          value={item.value.toString()}
                          key={item.id.toString()}
                        />
                      );
                    })}
                  </SelectPicker>
                </View>
                {errors.referer ? (
                  <Text style={styles.error}>{errors.referer}</Text>
                ) : null}
              </View>

              <InpuPhoneNumber
                mobile_phone={mobile_phone}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
              />

              <PrimaryInput
                Label="Adresse e-mail*"
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
                Label="Mot de passe*"
                secureTextEntry={hidePass ? true : false}
                isPassword={"pass"}
                hidePass={hidePass}
                HandlehidePass={HandlehidePass}
                errors={errors.password}
                touched={touched.password}
                placeholderTextColor={COLORS.Noir}
              />

              <PrimaryInput
                placeholderTextColor={COLORS.Noir}
                placeholder="Confirmer votre mot de passe"
                style={styles.Input}
                name={password_check}
                id={password_check}
                value={password_check}
                onBlur={handleBlur("password_check")}
                onChangeText={handleChange("password_check")}
                Label="Confirmation du mot de passe*"
                secureTextEntry={hidePass2 ? true : false}
                isPassword={"pass"}
                hidePass={hidePass2}
                HandlehidePass={HandlehidePass2}
                errors={errors.password_check}
                touched={touched.password_check}
              />

              <PrimaryButton
                opacity={1}
                style={{ marginVertical: 20 }}
                onPress={() => {
                  handleSubmit();
                  setTimeout(() => {
                    if (!isAuth) {
                      setErrors("");
                    }
                  }, 3000);
                }}
                loading={loading}
              >
                S’inscrire
              </PrimaryButton>
              <DarkTxt>*Champs Obligatoires</DarkTxt>
            </View>
          );
        }}
      </Formik>
    </Animatable.View>
  );
};

export default FormLogin;

const RenderItem = ({ item, index, HandelChange, isChecked }) => {
  return (
    <TouchableOpacity
      style={styles.BoxIcon}
      onPress={() => {
        HandelChange(index, item);
      }}
      key={index}
    >
      <RadioCheck
        checked={isChecked}
        item={item}
        index={index}
        HandelChange={HandelChange}
      />
      <Txt fontSize={18}>{item.label}</Txt>
    </TouchableOpacity>
  );
};
