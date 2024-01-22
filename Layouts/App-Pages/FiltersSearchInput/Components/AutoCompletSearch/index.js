import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { H7 } from "../../../../../Components/utils/TextComponents";
import styles from "./styles";
import iconResult from "../../../../../Assets/Images/GroupSearch.png";
import { Image } from "react-native";
import { SET_RECENTS, SET_RECENTS_VALUES } from "../../../../../Redux/Types/Search";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const AutoCompletSearch = ({ inputValue, navigation }) => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const { Recents } = search;
  // console.log('Recents---', Recents)
 
  // console.log('inputValue---', inputValue)

  const FilterData = (item) => {


    // console.log('item', item)

    let filter = Recents.includes(item);
    // console.log('filter', filter)
    if (filter) {
      let itemsCopy = [...Recents];
      dispatch({ type: SET_RECENTS, payload: itemsCopy });
      // dispatch({ type: SET_RECENTS_VALUES, payload: data });
    } else {
      dispatch({ type: SET_RECENTS, payload: [...Recents, item ] });
      // dispatch({ type: SET_RECENTS_VALUES, payload: data });
    }

    navigation.navigate("FiltersResults", { item });

  };

  // console.log('Recents', Recents)

  return (
    <View style={styles.Container}>
      <H7>Résultats </H7>
      <View>
        {inputValue?.map((item) => {
          return (
            <TouchableOpacity
              style={styles.item}
              key={item.id}
              onPress={() => {
                FilterData(item);
              }}
            >
              <Image source={iconResult} style={{ marginRight: 20 }} />

              <View style={{ flex: 1 }}>
                <H7 Bold="400">{item?.title} </H7>
                <View style={styles.Line}></View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default AutoCompletSearch;
