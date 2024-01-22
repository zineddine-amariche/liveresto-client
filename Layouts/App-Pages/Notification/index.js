import { View, Text } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";

const MesNotifications = ({ navigation, navigation: { goBack } }) => {
  const Nav = (path) => {
    navigation.navigate(path);
  };
  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Mes Notifications"} goBack={goBack} />
      <ScrollView>
        <View style={styles.cardInfo}>
          <Text>MesNotifications</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MesNotifications;
