import { Text, View } from "react-native";
import React, { useState } from "react";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import styles from "./Components/styles";
import Trier from "./Components/Trier";
import Prices from "./Components/Prices";
import Restrictions from "./Components/RestrictionsAlimentaires";
import { ScrollView } from "react-native";
import { PrimaryButton } from "../../../Components/utils/Buttons";
import TypeCuisine from "../../../Components/Lists/Type - Cuisine";
import { DATA, DATAResults } from "../../../Data";
import FavorisAdressesCard from "../../../Components/Cards/Card - 4 (adresses)";
import ButtonFilter from "../../../Components/Buttons/Button - 1 ( filter )";
import { FraisTxt } from "../../../Components/utils/TextComponents";
import FilterImg from "../../../Assets/Images/FilterImg.png"
import { useSelector } from "react-redux";
const Filters = ({ navigation, navigation: { goBack } }) => {
  const [Results, setResults] = useState(false);
  const Nav = (name, item) => {
    navigation.navigate(name, {
      item,
    });
  };
  const DisplayResults = () => {
    setResults(!Results);
  };
  const search = useSelector((state) => state.search);
  const { Reinitiliser } = search;
  return (
    <View style={styles.Fiter}>
      <HeaderPrimary Title={"Filtre"} goBack={goBack} R1={true} Reinitiliser={Reinitiliser} />
      <ScrollView>
        {!Results ? (
          <>
            <Trier />
            <Prices />
            <Restrictions />
            <TypeCuisine DATA={DATA} title={"Les types de cuisine"} />
          </>
        ) : (
          <>
            <View style={styles.TextBoxResult}>
            <FraisTxt>3 restaurants trouvés</FraisTxt>
              <ButtonFilter shadow onPress={()=>{console.log('click')}} source={FilterImg} />
            </View>
            {DATAResults.map((item, ind) => {
              return (
                <View key={ind}>
                  <FavorisAdressesCard item={item} Nav={Nav} />
                </View>
              );
            })}
          </>
        )}
      </ScrollView>
      {!Results && (
        <View style={styles.BoxButton}>
          <PrimaryButton opacity={1} onPress={DisplayResults}>
            Appliquer
          </PrimaryButton>
        </View>
      )}
    </View>
  );
};

export default Filters;
