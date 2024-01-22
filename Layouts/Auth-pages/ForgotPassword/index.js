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
import BottomSheet from "../../../Components/BottomSheetTopUpAccount";
import { useRef } from "react";
import { useCallback } from "react";
import ContentRenders from "./Components/BottomSheet/ContentRenders";

const ForgotPassword = ({ navigation }) => {
  const { forgotValues, validationSchema, onSubmit } = UseForgot();
  const auth = useSelector((state) => state.auth);
  const { loading } = auth;
  const isFocused = useIsFocused();
  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleClosetModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
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
          <Text style={styles.BigTitle}>Mot de passe oublié ?</Text>
          {/* <Text>E-mail ou numéro de téléphone enregistré</Text> */}
          <View style={{ height: 30 }} />
        </View>

        <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
          <Formik
            initialValues={forgotValues}
            validationSchema={validationSchema}
            onSubmit={(values, formikAction) => {
              onSubmit(values);
              //   navigation.navigate('ConfirmPassword')
              handlePresentModalPress();
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
              const { email } = values;
              return (
                <View style={{ flex: 1, margin: 2 }}>
                  <PrimaryInput
                    Label="E-mail ou numéro de téléphone "
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
                    keyboardType="email-address"
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
                    Next
                  </PrimaryButton>
                </View>
              );
            }}
          </Formik>
        </Animatable.View>

        <BottomSheet
          bottomSheetModalRef={bottomSheetModalRef}
          closeAll={handleClosetModalPress}
        >
          <ContentRenders
            // onPress={onPress}
            navigation={navigation}
            closeAll={handleClosetModalPress}
          />
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default ForgotPassword;

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
