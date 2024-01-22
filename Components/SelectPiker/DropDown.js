import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { H7, Txt } from "../utils/TextComponents";
import { COLORS, SIZES } from "../Styles/theme";
import Chevron from "../../Assets/Images/Chevron.png";
import Chevron2 from "../../Assets/Images/Chevron2.png";
import { Image } from "react-native";
import HView from "../View/HView";
import DropDownVide from "./COmponents/DropDownVide";
import * as Animatable from "react-native-animatable";

const DropDown = ({
  data = [],
  value = {},
  onSelect = () => {},
  setLocation,
  Location,
  background,
  hasData,
  setFieldValue,
  name,
  errors,
  touched,
  onBlur
}) => {
  const [ShowOption, setShowOption] = useState(false);

  const onSelectItem = (val) => {
    setShowOption(false);
    onSelect(val);
    setFieldValue(name, JSON.stringify(val));
  };

  return (
    <>
      {hasData ? (
        <View style={styles.container}>
          <TouchableOpacity
            style={[
              styles.DropDownStyle,
              { backgroundColor: background ? COLORS.Vert3 : COLORS.Blanc },
            ]}
            activeOpacity={0.8}
            onPress={() => {
              setShowOption(!ShowOption);
            }}
            onBlur={onBlur}
          >
            <HView spaceBetween>
              {!!value ? (
                <HView>
                  <H7>📍 </H7>
                  <View>
                    <H7
                      style={{
                        color: background ? COLORS.Blanc : COLORS.Vert3,
                      }}
                    >
                      {value?.locality}
                    </H7>
                    <H7
                      Bold="400"
                      style={{
                        color: background ? COLORS.Blanc : COLORS.Vert3,
                        fontSize: 15,
                      }}
                      numberOfLines={1}
                    >
                      {value?.coutry} | {value?.wiliaya}
                    </H7>
                  </View>
                </HView>
              ) : (
                <Txt
                  color={background ? COLORS.Blanc : COLORS.Vert3}
                  Bold="700"
                  fontSize={16}
                >
                  Selectionner une adresse
                </Txt>
              )}

              {background ? (
                <Image
                  source={Chevron2}
                  style={{
                    transform: [{ rotate: ShowOption ? "180deg" : "0deg" }],
                  }}
                />
              ) : (
                <Image
                  source={Chevron}
                  style={{
                    transform: [{ rotate: ShowOption ? "180deg" : "0deg" }],
                  }}
                />
              )}
            </HView>
          </TouchableOpacity>

          {errors && touched ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.error}>{errors} </Text>
            </Animatable.View>
          ) : null}
          <View style={{ position: "relative" }}>
            {ShowOption && (
              <View style={styles.containerItems}>
                {data.map((val, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        onSelectItem(val);
                        // console.log(val);
                        setLocation({
                          ...Location,
                          latitude: val.lat,
                          longitude: val.lng,
                          error: null,
                        });
                      }}
                      style={styles.item}
                    >
                      <HView>
                        <H7>📍 </H7>
                        <View>
                          <H7
                            style={{
                              color: COLORS.Noir,
                            }}
                          >
                            {val.locality}
                          </H7>
                          <H7
                            Bold="400"
                            style={{
                              color: COLORS.Noir,
                              fontSize: 15,
                            }}
                            numberOfLines={1}
                          >
                            {val.coutry} | {val.wiliaya}
                          </H7>
                        </View>
                      </HView>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      ) : (
        <DropDownVide />
      )}
    </>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Blanc,
  },
  DropDownStyle: {
    backgroundColor: COLORS.Blanc,
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    overflow: "hidden",
    borderRadius: 5,
  },
  containerItems: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    zIndex: 100,
    width: "100%",
  },
  item: {
    marginVertical: 5,
    backgroundColor: COLORS.Blanc,
    paddingVertical: 10,
  },
  error: {
    color: COLORS.Rouge,
    paddingVertical: 5,
    paddingLeft: 10,
    fontSize: 13,
    backgroundColor: COLORS.Gris,
  },
});
