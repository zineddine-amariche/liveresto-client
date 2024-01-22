import { Text, View } from "react-native";
import React, { useState } from "react";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import styles from "./Components/styles";

import { ScrollView } from "react-native";
import { PrimaryButton } from "../../../Components/utils/Buttons";
import { DATAResults } from "../../../Data";
import FavorisAdressesCard from "../../../Components/Cards/Card - 4 (adresses)";
import ButtonFilter from "../../../Components/Buttons/Button - 1 ( filter )";
import { FraisTxt, H7 } from "../../../Components/utils/TextComponents";
import FilterImg from "../../../Assets/Images/FilterImg.png";
import { useSelector } from "react-redux";
const FiltersResults = ({ navigation, navigation: { goBack }, route }) => {
  const { item, inputValue ,Recents } = route.params;
  console.log('inputValue', inputValue)
  const Nav = (name, item) => {
    navigation.navigate(name, {
      item,
    });
  };

  // const search = useSelector((state) => state.search);
  // const { Recents ,values } = search;


  return (
    <View style={styles.Fiter}>
      <HeaderPrimary
        Title={inputValue ? "Filtres" : item.title}
        goBack={goBack}
        R1={true}
      />
      <ScrollView>
     

        {inputValue ? (
          <>
         
            <View style={styles.TextBoxResult}>
              <FraisTxt>
                {inputValue ? inputValue.length : 1} restaurants trouvés 
              </FraisTxt>
              <ButtonFilter
                shadow
                onPress={() => {
                  console.log("click");
                }}
                source={FilterImg}
              />
            </View>
            <View style={{ paddingHorizontal: 30 , paddingVertical:20 }}>
            {inputValue.map((i) => {
              return (
                <View key={i.id}>
                  <FavorisAdressesCard item={i} Nav={Nav} />
                </View>
              );
            })}
            </View>
          </>
        ) : (
          <>
            <View style={styles.TextBoxResult}>
              <FraisTxt>{1} restaurants trouvés </FraisTxt>
              <ButtonFilter
                shadow
                onPress={() => {
                  console.log("click");
                }}
                source={FilterImg}
              />
            </View>

            
            <View key={item.id} style={{ paddingHorizontal: 30 , paddingVertical:20 }} >
              <FavorisAdressesCard item={item} Nav={Nav} />
            </View>

          </>
        )}
      </ScrollView>
    </View>
  );
};

export default FiltersResults;

