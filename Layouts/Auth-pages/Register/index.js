import React, { useEffect, useState } from "react";
import styles from "./Hooks/Styles";
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  useWindowDimensions,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import Bacimage from "../../../Assets/Images/background.png";
import Google from "../../../Assets/Images/google.png";
import Facebook from "../../../Assets/Images/Facebook.png";
import FormLogin from "./Components/Form";
import ToastMessages from "../../../Components/ToastMessages";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_MESSAGE,
  DELETE_MESSAGES,
} from "../../../Redux/Types/Login/index";
import { COLORS } from "../../../Components/Styles/theme";
import {
  BoldTxt,
  DarkTxt,
  H3,
  H7,
  LightTxt,
} from "../../../Components/utils/TextComponents";
import { ScrollView } from "react-native-gesture-handler";
import { GoogleSvg } from "../../../Assets/Svg/Google";
import { FacebookSvg } from "../../../Assets/Svg/Facebook";
import { TouchableOpacity } from "react-native";
const Register = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);
  const { error, type, data } = auth;
  const dispatch = useDispatch();
  const ToRegsiter = () => {
    navigation.navigate("login");
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch({ type: CLEAR_MESSAGE });
        console.log("delete");
      }, 3000);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        barStyle="dark-content"
      />

      {error && <ToastMessages type={type} error={error} />}
      <View style={[styles.containerABS, { padding: 20 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <H3 style={{ fontWeight: "700", marginTop: 40 }}>
            Je crée mon espace Live Resto
          </H3>

          <FormLogin />

          <View style={styles.Box}>
            <H7 Bold={"400"}> Ou je m’inscrit avec :</H7>

            <View style={styles.otherAuth}>
              <TouchableOpacity style={styles.Press}>
                <View
                  style={{
                    alignSelf: "center",
                    width: 16,
                    height: 16,
                    marginRight: 10,
                  }}
                >
                  <GoogleSvg />
                </View>
                <BoldTxt>Google</BoldTxt>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Press}>
                <View
                  style={{
                    alignSelf: "center",
                    width: 16,
                    height: 16,
                    marginRight: 10,
                  }}
                >
                  <FacebookSvg />
                </View>
                <BoldTxt>Facebook</BoldTxt>
              </TouchableOpacity>
            </View>
            <View style={styles.RowText}>
              <LightTxt style={styles.ScTitle}>
                {" "}
                J’ai déjà un compte !{" "}
              </LightTxt>

              <Pressable onPress={ToRegsiter}>
                <LightTxt style={{ color: COLORS.Vert3, fontWeight: "700" }}>
                  Je me connecte ici
                </LightTxt>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;
