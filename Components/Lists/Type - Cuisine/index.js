import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import ItemRender from "./components/Item";
import { H6, H7 } from "../../utils/TextComponents";
import { COLORS } from "../../Styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { SET_CUISINE } from "../../../Redux/Types/Search";

const TypeCuisine = ({ title, DATA }) => {
  const [currentSelectedItem, setCurrentSelectedItem] = useState(null);
  const dispatch = useDispatch()

  const HandelChange = (index,item) => {
    setCurrentSelectedItem(index);
    dispatch({ type: SET_CUISINE, payload: item });
  };
  const search = useSelector((state) => state.search);
  const { Reinitiliser } = search;
  useEffect(() => {
    if (!Reinitiliser) {
      setCurrentSelectedItem(null);
    }
  }, [Reinitiliser]);
  return (
    <View style={styles.container}>
      <H7 style={styles.title}>{title}</H7>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {DATA.map((item, index) => {
          let isChecked = currentSelectedItem === index ? true : false;

          return (
            <ItemRender
              item={item}
              key={item.Id}
              isChecked={isChecked}
              HandelChange={() => HandelChange(index,item)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default TypeCuisine;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Gris,
    flex: 1,
  },
  title: {
    fontWeight: "700",
    color: COLORS.Noir,
    padding: 20,
  },
});
