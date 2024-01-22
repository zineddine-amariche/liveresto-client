import {
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { H7 } from "../utils/TextComponents";
import { COLORS } from "../Styles/theme";
import { Picker as SelectPicker } from "@react-native-picker/picker";
import HView from "../View/HView";

import SelectList from "react-native-dropdown-select-list";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SelectItems = ({
  data,
  setFieldValue,
  name,
  onValueChange,
  errors,
  adrress,
  label,
  getLatLng,
}) => {
  return (
    <>
      <H7>{label}</H7>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.Blanc,
          borderRadius: 6,
          shadowColor: "#000",
          shadowOffset: {
            width: 10,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          marginHorizontal: 3,
          marginVertical: 10,
        }}
      >
        <SelectList
          onSelect={() => console.log(adrress?.coutry)}
          setSelected={adrress?.coutry}
          data={data}
          arrowicon={
            <FontAwesome name="chevron-down" size={12} color={"black"} />
          }
          searchicon={<FontAwesome name="search" size={12} color={"black"} />}
          search={false}
          boxStyles={{ borderRadius: 0 }} //override default styles
          
        />
      </View>
      {errors ? <Text style={styles.error}>{errors}</Text> : null}
    </>
  );
};

export default SelectItems;

const styles = StyleSheet.create({});

// <SelectPicker
// enabled={true}
// mode="dropdown"
// selectedValue={adrress}
// itemStyle={{ color: COLORS.Vert2 }}
// // onValueChange={(itemValue, itemIndex) => {
// //   setFieldValue(name, itemValue);
// //   // getLatLng(item.lat, item.lng);
// // }}
// style={{ color: COLORS.Vert2, fontSize: 20 }}
// >
// {data.map((item) => {
//   return (
//     <SelectPicker.Item
//       label={
//         item?.coutry.toString() + " " + item?.locality.toString()
//       }
//       value={
//         item?.coutry.toString() + " " + item?.locality.toString()
//       }
//       key={item?.number.toString()}
//     />
//   );
// })}
// </SelectPicker>
