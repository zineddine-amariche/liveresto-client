import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import styles from "./Components/styles";
import { DataAddNewCarte } from "../../../../../Data";
import { H7 } from "../../../../../Components/utils/TextComponents";
import { COLORS } from "../../../../../Components/Styles/theme";
import PrimaryInput from "../../../../../Components/Inputs/inputs - 2 (primary)";
import { PrimaryButton, SecondaryButton } from "../../../../../Components/utils/Buttons";

const CardA1 = () => {
  const { height, width } = Dimensions.get("window");

  return (
  
      <View style={{ paddingHorizontal: 30 }}>
        <View style={styles.container}>
          {DataAddNewCarte.map((item) => {
            return (
              <View style={[styles.BoxItem, { width: width / 4 }]} key={item.id}>
                <Image source={item.img} />
              </View>
            );
          })}
        </View>
        <View>
          <H7 Bold="400" color={COLORS.Vert3}>
            📷 Scanner ma carte
          </H7>
        </View>
        <View style={{ marginVertical: 5 }}>
          <PrimaryInput
            name="nom"
            Label={"Nom et prénom"}
            placeholder="Noémie SONZAY"
          />
          <PrimaryInput
            name="phone"
            Label={"Numéro de la carte"}
            placeholder="1234 5678 2222 2227"
          />
          <View style={styles.row}>
            <View style={{ width: "45%" }}>
              <PrimaryInput
                name="Date"
                Label={"Date d’expédition"}
                placeholder="00/00"
              />
            </View>
            <View style={{ width: "45%" }}>
              <PrimaryInput
                name="code"
                Label={"Code de sécurité"}
                placeholder="000"
              />
            </View>
          </View>
        </View>
      </View>

  );
};

export default CardA1;
