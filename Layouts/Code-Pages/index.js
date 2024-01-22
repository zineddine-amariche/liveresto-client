import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Spinner from "../../Components/Spiner";
import styles from "./Hooks/Styles";
import ScrenCode from "../../Assets/Splash/urdocto200.png";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../Styles/theme";
import {
  CODE_DOESNTEXIST,
  CODE_EXIST,
  INVALID_CODE,
  SET_CODE1_COMPLETE,
  SET_CODE3,
  SET_CODE_ACTIVATED,
  VALID_CODE,
} from "../../Redux/Types/AccesCode";
let numbers = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
  { id: "9" },
  { id: "0" },
];
const CodePage = () => {

  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();

  let mt = !IscodeValid && Code3[3] !== "" ? 40 : 60;

  const onAdd = (num) => {
    let tempCd = Code3;
    for (var i = 0; i < tempCd.length; i++) {
      if (tempCd[i] === "" || tempCd[i] === 0) {
        tempCd[i] = num;
        break;
      } else {
        continue;
      }
    }
    // for (var i = 0; i < tempCd.length; i++) {
    //   if (tempCd[3] != "") {
    //     dispatch({ type: SET_CODE1_COMPLETE });
    //     break;
    //   } else {
    //     continue;
    //   }
    // }

    for (var i = 0; i < tempCd.length; i++) {
      if (tempCd[3] !== "" && code) {

        str = code
        str2 = Code3

        console.log("str", str);
        console.log("STR", str2);

        if (code === JSON.stringify(Code3)) {
          // setIscodeValid(true);
          dispatch({ type: VALID_CODE });
          dispatch({ type: CODE_DOESNTEXIST });
        } else {
          // setIscodeValid(false);
          dispatch({ type: INVALID_CODE });
        }
        break;
      } else {
        continue;
      }
    }

    // console.log("JSON.stringify(Code)", JSON.stringify(Code));
    // console.log("JSON.stringify(Code3)", JSON.stringify(Code3));
    // console.log('IscodeValid', IscodeValid)
    dispatch({ type: SET_CODE3, payload: tempCd });
  };

  const onCancel = () => {
    let tempCd = Code3;
    for (var i = tempCd.length - 1; i >= 0; i--)
      if (tempCd[i] != "" || tempCd[i] === 0) {
        tempCd[i] = "";

        break;
      } else {
        continue;
      }
    // console.log("JSON.stringify(Code) onCancel", JSON.stringify(Code));
    // console.log("JSON.stringify(Code3) onCancel", JSON.stringify(Code3));

    dispatch({ type: SET_CODE3, payload: tempCd });
  };
  return (
    <View style={styles.container}>
      {laoder ? (
        <Spinner />
      ) : (
        <>
          <ImageBackground
            source={ScrenCode}
            blurRadius={15}
            style={{
              position: "absolute",
              top: 0,
              width: width,
              height: height,
            }}
          />

          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.label}>UrDocto</Text>
              </View>
            </View>
          </View>
          <View style={styles.swipe}>
            <View style={styles.BoxRow}>
              <Icon
                name="lock"
                size={30}
                color={COLORS.black}
                style={{ marginRight: 5 }}
              />

              <Text style={styles.labelTitle}>Bonjour</Text>
            </View>
            <View style={[styles.codeContainer]}>
              {Code3.map((p, index) => {
                let style = p != "" ? styles.code2 : styles.code1;
                return <View style={style} key={index.toString()}></View>;
              })}
            </View>
            <View style={styles.codeBoxError}>
              {!IscodeValid && Code3[3] !== "" && (
                <Text style={styles.codeBoxErrorText}>Invalide code</Text>
              )}
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={[styles.containerNumbers, { marginTop: mt }]}>
                {numbers.map((n) => {
                  return (
                    <TouchableOpacity
                      style={styles.number}
                      key={n.id}
                      onPress={() => {
                        onAdd(n.id);
                      }}
                    >
                      <Text style={styles.numberText}>{n.id}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View style={styles.buttons}>
              {Code3[0] !== "" ? (
                <TouchableOpacity
                  onPress={() => {
                    onCancel();
                  }}
                >
                  <Text style={styles.buttonAnnuler}>Annuler</Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default CodePage;
