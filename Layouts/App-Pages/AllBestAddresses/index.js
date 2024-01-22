import { View, Text } from "react-native";
import React, { useMemo, lazy, Suspense, useEffect, useState } from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import FavorisAdressesCard from "../../../Components/Cards/Card - 4 (adresses)";
import { useCallback } from "react";
import SplashLaoder from "../Splash";
import { Txt } from "../../../Components/utils/TextComponents";
import { COLORS } from "../../../Components/Styles/theme";

const AllBestAddresses = ({ navigation, navigation: { goBack } }) => {
  const Nav = (path) => {
    navigation.navigate(path);
  };

  const Establishements = useSelector((state) => state.Establishements);
  const { establishments } = Establishements;

  const [Ready, setReady] = useState(false);

  const Loader = () => {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Txt color={COLORS.Vert2} fontSize={18}>Chargement ....</Txt>
      </View>
    );
  };
  useEffect(() => {
    if (!Ready) {
      setTimeout(() => {
        setReady(true);
      }, 500);
    }
  }, []);

  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Les meilleurs adresses"} goBack={goBack} />

      {Ready ? (
        <ScrollView>
          <View style={styles.card}>
            {establishments.establishments?.map((item, ind) => {
              return (
                <View key={ind}>
                  <FavorisAdressesCard item={item} Nav={Nav} ind={ind} />
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default AllBestAddresses;
