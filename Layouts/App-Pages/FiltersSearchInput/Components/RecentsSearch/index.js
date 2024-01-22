import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { H7 } from "../../../../../Components/utils/TextComponents";
import styles from "./styles";
import iconResult from "../../../../../Assets/Images/GroupSearch.png";
import { Image } from "react-native";
const RecentsSearch = ({ navigation, Recents }) => {
  return (
    <View style={styles.Container}>
      <H7>Recherches récentes </H7>
      <View>
        {Recents?.map((item, ind) => {
          return (
        
              <TouchableOpacity
                style={styles.item}
                key={ind}
                onPress={() => {
                  navigation.navigate("FiltersResults", { item });
                  // console.log(item)
                }}
              >
                <Image source={iconResult} style={{ marginRight: 20 }} />

                <View style={{ flex: 1 }}>
                  <H7 Bold="400">{item.title} </H7>
                  <View style={styles.Line}></View>
                </View>
              </TouchableOpacity>
            
          );
        })}
      </View>
    </View>
  );
};

export default RecentsSearch;
