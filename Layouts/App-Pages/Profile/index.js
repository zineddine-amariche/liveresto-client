import { View, Text, StatusBar } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import CardP1 from "./Components/Card - 1";
import CardP2 from "./Components/Card - 2";
import CardP3 from "./Components/Card - 3";
import CardP4 from "./Components/Card - 4";
import { COLORS } from "../../../Components/Styles/theme";

const Profile = ({ navigation, navigation: { goBack } }) => {
  const Nav = (path) => {
    navigation.navigate(path);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle={"dark-content"}
        backgroundColor={COLORS.Blanc}
      />

      <HeaderPrimary Title={"Mon profile"} goBack={goBack} R1={true} />
      <ScrollView>
        <View style={styles.cardInfo}>
          <CardP1 Nav={Nav} />
          <CardP2 Nav={Nav} />
          <CardP3 Nav={Nav} />
          <CardP4 Nav={Nav} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
