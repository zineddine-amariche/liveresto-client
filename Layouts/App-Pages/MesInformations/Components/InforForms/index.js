import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import RadioCheck from "../../../../../Components/RadioCheck/useRadiochek";
import DateHandler from "../date";
import { radioButtonsData } from "../../data";

import LinearGradient from "react-native-linear-gradient";
import é from "../../../../../Assets/Images/é.png";

import PrimaryInput from "../../../../../Components/Inputs/inputs - 2 (primary)";
import {
  BoldTxt,
  H7,
  Txt,
} from "../../../../../Components/utils/TextComponents";
import HView from "../../../../../Components/View/HView";
import { COLORS } from "../../../../../Components/Styles/theme";
import styles from "../../Hooks/styles";
import * as ImagePicker from "react-native-image-picker";
import { UserProfileSvg } from "../../../../../Assets/Svg/UserLogoProfile";

const InfOForm = ({ navigation }) => {
  const search = useSelector((state) => state.search);
  const { Restrictions } = search;

  const auth = useSelector((state) => state.auth);
  const { data } = auth;
  //   console.log('data', data.customer.token)

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [currentSelectedItem, setCurrentSelectedItem] = useState(
    data?.customer.gender == "M" ? 0 : 1
  );

  const [hidePass, setHidePass] = useState(true);

  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };

  const [fileUri, setFileUri] = useState("");

  const launchImageLibrary = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
        mediaType: "photo",
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
    };

    let result = await ImagePicker.launchImageLibrary({
      mediaTypes: "photo",
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.didCancel) {
      setFileUri(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.cardInfo}>
        <View style={styles.circle}>
          {fileUri ? (
            <Image
              source={{ uri: fileUri }}
              style={{
                height: fileUri ? 135 : "90%",
                width: fileUri ? 135 : "90%",
                borderRadius: 200,
                backgroundColor: "#eee",
                borderColor: COLORS.paleGrey,
                borderWidth: fileUri ? 5 : 0,
              }}
            />
          ) : (
            <UserProfileSvg />
          )}
        </View>
        <TouchableOpacity style={styles.Modify}>
          <Text
            style={{ paddingBottom: 4, paddingLeft: 3, color: COLORS.Vert3 }}
            onPress={launchImageLibrary}
          >
            ✏
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ContainerInputs}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 2,
          }}
        >
          <PrimaryInput
            Label="Nom*"
            name={"firstname"}
            value={data?.customer.firstname}
            style={styles.Input}
            placeholderTextColor={COLORS.Noir}
            editable={false}
          />
          <PrimaryInput
            Label="Prénom*"
            name={"lastname"}
            value={data?.customer.lastname}
            style={styles.Input}
            placeholderTextColor={COLORS.Noir}
            editable={false}
          />
        </View>

        <View
          style={{
            marginVertical: 10,
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
              let isChecked = currentSelectedItem === index ? true : false;

              return (
                <RenderItem
                  item={item}
                  index={index}
                  HandelChange={() => {
                    // HandelChange(index, item.value);
                    // setFieldValue("gender", item.value);
                  }}
                  isChecked={isChecked}
                  key={index}
                />
              );
            })}
          </View>
          {/* {errors.gender && touched.gender ? (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.error}>{errors.gender} </Text>
              </Animatable.View>
            ) : null} */}
        </View>

        <View
          style={{
            flex: 1,
            marginVertical: 10,
          }}
        >
          <H7>{"Date de naissance*"}</H7>
          <DateHandler nodate />
        </View>

        <PrimaryInput
          Label={"Numéro de téléphone"}
          name={"Numéro de téléphone"}
          placeholder={data?.customer.mobile_phone}
          check
          style={styles.Input}
          placeholderTextColor={COLORS.Noir}
          editable={false}
        />
        <PrimaryInput
          Label={"Adresse e-mail"}
          name={"Numéro de téléphone"}
          placeholder={data?.customer.email}
          check={"NonCheck"}
          style={styles.Input}
          placeholderTextColor={COLORS.Noir}
          editable={false}
        />

        <PrimaryInput
          style={styles.Input}
          name={"password"}
          id={"password"}
          value={"password"}
          Label="Mot de passe*"
          secureTextEntry={hidePass ? true : false}
          hidePass={hidePass}
          HandlehidePass={HandlehidePass}
          placeholderTextColor={COLORS.Noir}
          editable={false}
        />

        <HView spaceBetween style={{ paddingVertical: 20 }}>
          <Txt>Restrictions alimentaires</Txt>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RestrictionsAlimentaires");
            }}
          >
            <Txt color={COLORS.Vert3}>+ Ajouter</Txt>
          </TouchableOpacity>
        </HView>

        <HView style={{ flexWrap: "wrap" }}>
          {Restrictions &&
            Restrictions.map((item) => {
              return (
                <LinearGradient
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={[COLORS.Vert3, COLORS.Blue2]}
                  style={styles.BoxGradient}
                >
                  <BoldTxt style={styles.TextGR}>{item.title}</BoldTxt>
                </LinearGradient>
              );
            })}
        </HView>
      </View>
    </ScrollView>
  );
};

export default InfOForm;

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
