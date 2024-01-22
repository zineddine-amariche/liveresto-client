import { View, Image, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./Hooks/styles";
import Arrow from "../../../Assets/Header/Return.png";
const HeaderScondary = ({ navigation, goBack, Title, showButton ,Open}) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          goBack();
        }}
      >
        <Image source={Arrow} />
      </TouchableOpacity>
      <View style={styles.Right}>
        <Text style={styles.TextTitle}>{Title}</Text>
        {showButton ? (
          <TouchableOpacity onPress={Open}>
            <Text style={styles.TextTitleButton}>Upload</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default HeaderScondary;
