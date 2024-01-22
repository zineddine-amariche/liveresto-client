import { View, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./Hooks/styles";
import Left from "../../../Assets/Images/Left.png";
import search from "../../../Assets/Images/search.png";
import { COLORS } from "../../Styles/theme";

const HeaderPrimarySearch = ({
  goBack,
  Title,
  HandleFilter,
  setValr,
  valr,
  navigation,
  inputValue
}) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          goBack();
        }}
      >
        <Image source={Left} />
      </TouchableOpacity>
      <View style={styles.Right}>
        <TextInput
          placeholder={Title}
          placeholderTextColor={COLORS.Vert3}
          onChangeText={(newText) => {
            setValr(newText);
            HandleFilter();
          }}
          value={valr}
        />
        <Pressable
          onPress={() => {
            navigation.navigate("FiltersResults", { inputValue });
          }}
        >
          <Image source={search} style={{ marginRight: 10 }} />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderPrimarySearch;
