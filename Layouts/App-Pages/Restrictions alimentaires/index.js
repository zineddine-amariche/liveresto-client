import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./Hooks/styles";
import HeaderPrimary from "../../../Components/Headers/header-1-Primary";
import { ScrollView } from "react-native";
import { H7, Txt } from "../../../Components/utils/TextComponents";
import { ListRestrictions } from "../../../Data";
import ItemRestrictions from "./Components/ItemRestrictions";
import { SET_RESTRICTION } from "../../../Redux/Types/Search";
import { useDispatch } from "react-redux";
import { PrimaryButton } from "../../../Components/utils/Buttons";

const RestrictionsAlimentaires = ({ navigation, navigation: { goBack } }) => {

  const dispatch = useDispatch()
  const Nav = (path) => {
    navigation.navigate(path);
  };
  const [currentOptionSelected, setCurrentOptionSelected] = useState([]);

  const [checkedState, setCheckedState] = useState(
    new Array(ListRestrictions.length).fill(false)
  );
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
      <HeaderPrimary R1 Title={"Restrictions alimentaires"} goBack={goBack} />
      <ScrollView>
        <View style={styles.cardInfo}>
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
      </ScrollView>
      <View style={styles.BoxButton} > 
          <PrimaryButton onPress={goBack} >Appliquer</PrimaryButton>
        </View>
    </View>
  );
};

export default RestrictionsAlimentaires;
