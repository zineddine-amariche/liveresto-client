import { View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Components/styles";
import { ScrollView } from "react-native";
import HeaderPrimarySearch from "../../../Components/Headers/header - 2 - Search";
import TypeCuisine from "../../../Components/Lists/Type - Cuisine";
import { DATA, DATAResults } from "../../../Data";
import AutoCompletSearch from "./Components/AutoCompletSearch";
import RecentsSearch from "./Components/RecentsSearch";
import { useSelector } from "react-redux";

const FiltersSearchInput = ({ navigation, navigation: { goBack } }) => {
  const [inputValue, setinputValue] = useState([]);
  const [valr, setValr] = useState([]);
  const Establishements = useSelector((state) => state.Establishements);
  const { establishments } = Establishements;
  const search = useSelector((state) => state.search);
  const { Recents } = search;

  const HandleFilter = () => {
    if (valr.length) {
      const newFilter = establishments?.establishments.filter((value) => {
        return value.title.toLowerCase().includes(valr.toLowerCase());
      });
      if (valr === "") {
        setinputValue([]);
      } else {
        setinputValue(newFilter);
      }
    }
  };

  // console.log("Recents", Recents);
  // console.log("values", values);
  return (
    <View style={styles.Fiter}>
      <HeaderPrimarySearch
        Title={"Restaurants, plats, pays, ..."}
        goBack={goBack}
        HandleFilter={HandleFilter}
        setValr={setValr}
        value={valr}
        inputValue={inputValue}
        navigation={navigation}
      />
      <ScrollView>
        {Recents && valr == "" && (
          <RecentsSearch Recents={Recents} navigation={navigation} />
        )}
        {inputValue.length != 0 && valr !== "" && (
          <AutoCompletSearch inputValue={inputValue} navigation={navigation} />
        )}
        <TypeCuisine DATA={DATA} title={"Les types de cuisine"} />
      </ScrollView>
    </View>
  );
};

export default FiltersSearchInput;
