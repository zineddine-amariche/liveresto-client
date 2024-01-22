import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../../../Components/Styles/theme";
import PrimaryInput from "../../../../../Components/Inputs/inputs - 2 (primary)";
import { champsRefer, radioButtonsData } from "../../data";
import { useSelector } from "react-redux";
import { H7, Txt } from "../../../../../Components/utils/TextComponents";
import DateHandler from "../date";
import { PrimaryButton } from "../../../../../Components/utils/Buttons";
import RadioCheck from "../../../../../Components/RadioCheck/useRadiochek";
import { Picker  as SelectPicker} from "@react-native-picker/picker";


import { KeyboardAvoidingView } from "react-native";
import { UseUpdate } from "../../Hooks/UseUpdate";
import { Field, Form, Formik } from "formik";

const UpdateForms = ({funHeader}) => {
  const auth = useSelector((state) => state.auth);
  const { error, loading, data } = auth;

  const champsRefer = [
    { name: data?.customer.referer, value: data?.customer.referer, id: 1 },
    { name: "Réseaux sociaux", value: "social_network", id: 2 },
    { name: "moteur de recherche", value: "search_engine", id: 7 },
    { name: "Bouche à oreille", value: "hearsay", id: 3 },
    {
      name: "Publicité imprimé (flyer, affiche,...)",
      value: "newspaper",
      id: 4,
    },
    { name: "autre", value: "other", id: 5 },
  ];
  const [currentSelectedItem, setCurrentSelectedItem] = useState(
    data?.customer.gender == "M" ? 0 : 1
  );
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };
  const HandlehidePass2 = () => {
    setHidePass2(!hidePass2);
  };

  const { UpdateValues, validationSchema, onSubmit } = UseUpdate();

  const HandelChangeValue = (idx) => {
    setCurrentSelectedItem(idx);
  };
  return (
    <Formik
      initialValues={UpdateValues}
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
        {
          /* console.log("values", values); */
        }
        return (
          <KeyboardAvoidingView behavior="height">
            <ScrollView>
              <View style={styles.ContainerInputs}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 2,
                  }}
                >
                  <PrimaryInput
                    Label="Nom"
                    name={"firstname"}
                    value={firstname}
                    style={styles.Input}
                    placeholder={data?.customer.firstname}
                    onBlur={handleBlur("firstname")}
                    onChangeText={handleChange("firstname")}
                    errors={errors.firstname}
                    touched={touched.firstname}
                    placeholderTextColor={COLORS.Noir}
                  />
                  <PrimaryInput
                    Label="Prénom"
                    name={"lastname"}
                    value={lastname}
                    placeholder={data?.customer.lastname}
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
                    marginVertical: 10,
                  }}
                >
                  <H7 style={styles.label}>{"Genre"}</H7>
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
                            HandelChangeValue(index, item.value);
                            setFieldValue("gender", item.value);
                          }}
                          isChecked={isChecked}
                          key={index}
                          setFieldValue={setFieldValue}
                          HandelChangeValue={HandelChangeValue}
                        />
                      );
                    })}
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    marginVertical: 10,
                  }}
                >
                  <H7>{"Date de naissance*"}</H7>
                  <DateHandler setFieldValue={setFieldValue} />
                </View>

                <View>
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
                <PrimaryInput
                  check
                  value={mobile_phone}
                  style={styles.Input}
                  Label={"Numéro de téléphone"}
                  name={"mobile_phone"}
                  placeholder={data?.customer.mobile_phone}
                  placeholderTextColor={COLORS.Noir}
                  onBlur={handleBlur("mobile_phone")}
                  onChangeText={handleChange("mobile_phone")}
                  errors={errors.mobile_phone}
                  touched={touched.mobile_phone}
                />
                <PrimaryInput
                  Label={"Adresse e-mail"}
                  name={"email"}
                  check={"NonCheck"}
                  style={styles.Input}
                  placeholder={data?.customer.email}
                  placeholderTextColor={COLORS.Noir}
                  onBlur={handleBlur("email")}
                  onChangeText={handleChange("email")}
                  value={email}
                  errors={errors.email}
                  touched={touched.email}
                />

                <PrimaryInput
                  style={styles.Input}
                  name={"password"}
                  id={"password"}
                  value={password}
                  onBlur={handleBlur("password")}
                  onChangeText={handleChange("password")}
                  Label="Mot de passe*"
                  secureTextEntry={hidePass ? true : false}
                  hidePass={hidePass}
                  HandlehidePass={HandlehidePass}
                  placeholderTextColor={COLORS.Noir}
                  placeholder={"Nouveau mot de passe"}
                  errors={errors.password}
                  touched={touched.password}
                  isPassword={"pass"}

                />

                <PrimaryInput
                  placeholderTextColor={COLORS.Noir}
                  placeholder="retaper le nouveau mot de passe*"
                  style={styles.Input}
                  name={"password_check"}
                  id={"password_check"}
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
                <View
                  style={{
                    height: 60,
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <PrimaryButton
                    onPress={() => {
                      handleSubmit();
                      // funHeader()
                    }}
                loading={loading}

                  >
                    Modifier
                  </PrimaryButton>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
};

export default UpdateForms;

const RenderItem = ({
  item,
  index,
  HandelChange,
  isChecked,
  setFieldValue,
  HandelChangeValue,
}) => {
  return (
    <TouchableOpacity
      style={styles.BoxIcon}
      onPress={() => {
        HandelChangeValue(index, item.value);
        setFieldValue("gender", item.value);
      }}
      key={index}
    >
      <RadioCheck
        checked={isChecked}
        item={item}
        index={index}
        HandelChange={HandelChangeValue}
      />
      <Txt fontSize={18}>{item.label}</Txt>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.Blanc,
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
    margin: 3,
  },
  label: {
    fontSize: 17,
    fontWeight: "700",
    marginVertical: 10,
  },
  cardInfo: {
    flex: 1,
    alignItems: "center",
    padding: 35,
  },
  circle: {
    height: 135,
    width: 135,
    borderRadius: 100,
    backgroundColor: COLORS.Vert3,
    alignItems: "center",
    justifyContent: "center",
  },
  elseText: {
    fontSize: 30,
  },
  Modify: {
    position: "absolute",
    backgroundColor: COLORS.Vert6,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    bottom: 20,
    right: "40%",
  },
  ContainerInputs: {
    padding: 30,
  },
  BoxGradient: {
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    marginRight: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  TextGR: {
    color: COLORS.Blanc,
  },
  BoxIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#eee",
    shadowColor: "#FFFFFF",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
});
