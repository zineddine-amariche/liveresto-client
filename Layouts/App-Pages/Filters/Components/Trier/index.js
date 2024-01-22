import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Components/styles";
import { H7 } from "../../../../../Components/utils/TextComponents";
import Item from "./Components/ItemFilter Prices- render";
import { ListTri } from "../../../../../Data";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SET_TRIER } from "../../../../../Redux/Types/Search";

const Trier = () => {
  const dispatch = useDispatch();
  const [currentOptionSelected, setCurrentOptionSelected] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(ListTri.length).fill(false)
  );
  const search = useSelector((state) => state.search);
  const { Trier ,Reinitiliser} = search;
  useEffect(() => {
    if(!Reinitiliser){let AR = new Array(ListTri.length).fill(false);
    setCheckedState(AR);}
  }, [Reinitiliser]);

  const handleOnChange = (position, option) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    let filter = currentOptionSelected.includes(option);
    if (filter) {
      let itemsCopy = [...currentOptionSelected];
      var index = currentOptionSelected.indexOf(option);
      itemsCopy.splice(index, 1); // to delete one item from the new array
      setCurrentOptionSelected(itemsCopy);
      dispatch({ type: SET_TRIER, payload: itemsCopy });
    } else {
      setCurrentOptionSelected([...currentOptionSelected, option]);
      dispatch({
        type: SET_TRIER,
        payload: [...currentOptionSelected, option],
      });
    }
  };
  return (
    <View style={styles.container}>
      <H7 style={styles.T1}>Trier</H7>
      <View style={styles.space} />
      <View style={styles.List}>
        {ListTri.map((i, index) => {
          return (
            <Item
              item={i}
              index={index}
              key={i.id}
              checkedState={checkedState}
              handleOnChange={handleOnChange}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Trier;
