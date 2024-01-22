import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HView from "../../../../../../../Components/View/HView";
import {
  FraisTxt,
  H7,
} from "../../../../../../../Components/utils/TextComponents";
import { COLORS } from "../../../../../../../Components/Styles/theme";

const ContainerT1 = ({ Nav }) => {
  return (
    <HView spaceBetween style={{ marginBottom: 20 }}>
      <H7>Adresse de livraison</H7>
      <TouchableOpacity onPress={() => Nav("MesAdresses")}>
        <FraisTxt color={COLORS.Vert3}>+ Ajouter </FraisTxt>
      </TouchableOpacity>
    </HView>
  );
};

export default ContainerT1;

const styles = StyleSheet.create({});
