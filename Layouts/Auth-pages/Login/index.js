import React, { useEffect, useState } from "react";
import styles from "./Hooks/Styles";
import {
  View,
  StatusBar,
  useWindowDimensions,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import Bacimage from "../../../Assets/Images/background.png";
import Google from "../../../Assets/Images/google.png";
import Facebook from "../../../Assets/Images/Facebook.png";
import FormLogin from "./Components/Form";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../../Components/Styles/theme";
import { BoldTxt, DarkTxt, H3 } from "../../../Components/utils/TextComponents";
import ToastMessages from "../../../Components/ToastMessages";
import { CLEAR_MESSAGE } from "../../../Redux/Types/Login";
import { FacebookSvg } from "../../../Assets/Svg/Facebook";
import { GoogleSvg } from "../../../Assets/Svg/Google";
import { TouchableOpacity } from "react-native";
const Login = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);
  const { error, type } = auth;
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const ToRegsiter = () => {
    navigation.navigate("Register");
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
      <View style={[styles.containerABS, { width, paddingHorizontal: 30 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ height: 100 }}></View>

          <H3
            style={{
              fontWeight: "700",
              color: COLORS.Noir,
              fontFamily: "Helvetica",
            }}
          >
            Je me connecte à mon espace Live Resto
          </H3>
          <View style={styles.RowText}>
            <DarkTxt style={styles.ScTitle}> Je n'ai pas de compte ? </DarkTxt>

            <Pressable onPress={ToRegsiter}>
              <DarkTxt style={{ color: COLORS.Vert3, fontWeight: "700" }}>
                Je m'inscrit ici
              </DarkTxt>
            </Pressable>
          </View>

          <FormLogin navigation={navigation} />

          <View style={styles.Box}>
            <DarkTxt style={{ marginTop: 10 }}>Ou je continue avec :</DarkTxt>
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
          </View>
          <View style={{ height: 100 }}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
