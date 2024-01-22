import { View, Image, Text, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./Hooks/styles";
import { COLORS } from "../../../Styles/theme";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ReusHeader } from "./Hooks/ReusHeader";

const HeaderInput = ({
  goBack,
  navigation,
  title,
  ShowFilter,
  OnChange,
  ShowMedcins,
  ViderInput,
}) => {
  const { position } = ReusHeader();
  return (
    <View style={[styles.container]}>
      <View style={styles.Center}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            if (ShowFilter) {
              ViderInput();
            } else if (!ShowFilter) {
              goBack();
            }
          }}
        >
          <AntDesign name="arrowleft" size={28} color={COLORS.primary} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          maxLength={22}
          placeholder={title}
          value={ShowFilter}
          onChangeText={(e) => OnChange(e)}
        />
        {title === "Nom, Spécialté ou ..." && (
          <TouchableOpacity
            style={styles.Ville}
            onPress={() => {
              navigation.navigate("Wilayas");
            }}
          >
            <EvilIcons
              name="location"
              size={28}
              color={COLORS.green}
              style={{ marginRight: 2 }}
            />
            <Text style={styles.textVille}>
              {" "}
              {position.length > 6
                ? position.substring(0, 11 - 4) + " ..."
                : position}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderInput;
