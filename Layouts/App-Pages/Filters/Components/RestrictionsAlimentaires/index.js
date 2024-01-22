import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Components/styles";
import { H7 } from "../../../../../Components/utils/TextComponents";
import { ListRestrictions } from "../../../../../Data";
import ItemRestrictions from "./Components/ItemRestrictions";
import { useDispatch, useSelector } from "react-redux";
import { SET_RESTRICTION } from "../../../../../Redux/Types/Search";

const Restrictions = () => {
  const dispatch = useDispatch();

  const [currentOptionSelected, setCurrentOptionSelected] = useState([]);

  const [checkedState, setCheckedState] = useState(
    new Array(ListRestrictions.length).fill(false)
  );

  const search = useSelector((state) => state.search);
  const { Reinitiliser, Restrictions } = search;

  useEffect(() => {
    if (!Reinitiliser) {
      let AR = new Array(ListRestrictions.length).fill(false);
      setCheckedState(AR);
    }
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
      dispatch({ type: SET_RESTRICTION, payload: itemsCopy });
    } else {
      setCurrentOptionSelected([...currentOptionSelected, option]);
      dispatch({
        type: SET_RESTRICTION,
        payload: [...currentOptionSelected, option],
      });
    }
  };
  return (
    <View style={styles.container}>
      <H7 style={styles.T1}>Restrictions alimentaires </H7>

      <View style={{ marginTop: 10 }}>
        {ListRestrictions.map((item, index) => {
          return (
            <ItemRestrictions
              item={item}
              key={item.key}
              checkedState={checkedState}
              handleOnChange={handleOnChange}
              index={index}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Restrictions;
