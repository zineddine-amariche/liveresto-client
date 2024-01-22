import { View, Text } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";

const Aide = ({ navigation, navigation: { goBack } }) => {
  const Nav = (path) => {
    navigation.navigate(path);
  };
  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Aide"} goBack={goBack} />
      <ScrollView>
        <View style={styles.cardInfo}>
          <Text>Aide</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Aide;
