import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { ListPrices } from "../../../../../Data";
import ItemPrices from "./Components/ItemFilter - render";
import { useDispatch, useSelector } from "react-redux";
import { SET_PRICE } from "../../../../../Redux/Types/Search";

const Prices = () => {
  const [currentSelectedItem, setCurrentSelectedItem] = useState(null);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch()
  const {Reinitiliser,Price} = search;
  const HandelChange = (index,item) => {
    setCurrentSelectedItem(index);
    dispatch({ type: SET_PRICE, payload: item });

  };

  useEffect(() => {
    if(!Reinitiliser){;
      setCurrentSelectedItem(null);}
  }, [Reinitiliser]);
  return (
    <View style={styles.container}>
      <View style={styles.RowBox}>
        {ListPrices.map((item, index) => {
          let isChecked = currentSelectedItem === index ? true : false;

          return (
            <ItemPrices
              item={item}
              key={item.id}
              isChecked={isChecked}
              HandelChange={() => HandelChange(index,item)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Prices;
