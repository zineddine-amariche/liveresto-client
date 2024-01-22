import { View, Text } from "react-native";
import React, { useRef } from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import CardA1 from "./Components/Card - 1";
import CardA2 from "./Components/Card - 2";
import CardA3 from "./Components/Card - 3";

const MesAdresses = ({ navigation, navigation: { goBack } }) => {
  const scrollRef = useRef(null);
  const Nav = (path, item) => {
    navigation.navigate(path, {item} );
  };

  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Mes Adresses"} goBack={goBack} />
      <ScrollView ref={scrollRef}>
        <View style={styles.cardInfo}>
          <CardA1 />
          <CardA2 Nav={Nav} />
          <ScrollView horizontal={true}
          scrollEnabled={false}
            contentContainerStyle={{flex:1}}
          >
            <CardA3 Nav={Nav} simultaneousHandlers={scrollRef} navigation={navigation} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default MesAdresses;
