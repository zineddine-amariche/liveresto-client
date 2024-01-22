import { View, Image, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./Hooks/styles";
import FilterImage from "../../../../../Assets/Images/Filtre.png";
import { DATA } from "./Components/data";
import FlagsRender from "./Components/FlagsRender";
import { SmallBoldTxt } from "../../../../../Components/utils/TextComponents";
import ButtonFilter from "../../../../../Components/Buttons/Button - 1 ( filter )";
import InputSearch from "../../../../../Components/Inputs/Input - 1 (search)";
const CategorySearch = ({ Nav, DisableHeader }) => {
  return (
    <View style={styles.container}>
      <View style={styles.BoxRow}>
        <InputSearch  onPress={()=>Nav("FiltersSearchInput")} text={"Restaurants, plats, pays ..."} width="80%"/>
        <ButtonFilter source={FilterImage} onPress={() => Nav("Filters")} />
      </View>

      {DisableHeader && (
        <>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.Id}
            renderItem={({ item }) => <FlagsRender item={item} key={item.Id} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View style={{ height: 15 }}></View>
        </>
      )}
    </View>
  );
};

export default CategorySearch;
