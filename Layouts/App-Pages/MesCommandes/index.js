import { View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import CardB1 from "./Components/Card - 1";
import { Image } from "react-native";
import noDataImg from "../../../Assets/Images/amico.png";
import { H4, Txt } from "../../../Components/utils/TextComponents";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../Components/utils/Buttons";
import CommadesCard from "../../../Components/Cards/Card - 7 (Commandes)";
import RecentsCardCommandes from "../../../Components/Cards/Card - 2 (recents Commandes)";
import { dataHistoriqueCommandes } from "../../../Data";
import { useSelector } from "react-redux";
const MesCommandes = ({ navigation, navigation: { goBack } }) => {
  const Nav = (path) => {
    navigation.navigate(path);
  };
  const Commandes = useSelector((state) => state.Commandes);
  const { EnAttente } = Commandes;
  const [SelectedButn, setSelectedButn] = useState(true);
  const onPress = () => {
    setSelectedButn(!SelectedButn);
  };

  // const [Disponible, setDisponible] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDisponible(true);
  //   }, 3000);
  // }, []);

  const OnPresss = () => {
    navigation.navigate("Panier");
  };
  const OnNav = (item) => {
    navigation.navigate("InfoMesCommandes", { item });
  };
  return (
    <View style={styles.container}>
      <HeaderPrimary Title={"Historique des commandes"} goBack={goBack} />

      <CardB1
        SelectedButn={SelectedButn}
        onPress={() => {
          // Nav("Panier");
          onPress()
        }}
      />
      <View style={{ flex:1 }}>
        <ScrollView>
          {SelectedButn ? (
            !EnAttente ? (
              <View style={styles.BoxDisponible}>
                <CommadesCard
                  onPress={() => {
                    Nav("Panier");
                  }}
                />
              </View>
            ) : (
              <View style={{}}>
                <View style={styles.boxImg}>
                  <Image source={noDataImg} />
                </View>
                <View style={styles.boxText}>
                  <H4 style={styles.text}>
                    Vous n’avez pas de commande en attente
                  </H4>
                </View>
                <View style={styles.boxText}>
                  <Txt style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi,
                    dui vitae adipiscing vel pretium, nunc id enim, tempor. Sem
                    nibh quis duis nibh dignissim consectetur.
                  </Txt>
                </View>
                <View style={styles.BoxButton}>
                  <PrimaryButton onPress={OnPresss}>
                    Choisir un restaurant
                  </PrimaryButton>
                  <View style={styles.space} />
                  <SecondaryButton
                    onPress={() => {
                      Nav("Panier");
                    }}
                  >
                    Voir le panier
                  </SecondaryButton>
                </View>
              </View>
            )
          ) : (
            <View style={styles.Recents}>
              {dataHistoriqueCommandes.map((item) => {
                return (
                  <RecentsCardCommandes
                    commandes
                    item={item}
                    key={item.id}
                    OnNav={OnNav}
                  />
                );
              })}
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default MesCommandes;
