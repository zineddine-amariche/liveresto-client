import { View, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { H7 } from "../../../../../Components/utils/TextComponents";
import { COLORS } from "../../../../../Components/Styles/theme";

const ItemAdresse = ({ Divider, last, Nav, item,index,navigation }) => {
  return (
    <>
      <View style={styles.item}>
        <View style={styles.Row}>
          <H7>📍 </H7>
          <View>
            <H7
              style={{
                color: COLORS.Noir,
              }}
            >
              {item.locality}
            </H7>
            <H7
              Bold="400"
              style={{
                color: COLORS.Noir,
                fontSize: 15,
              }}
              numberOfLines={1}
            >
              {item.coutry} | {item.wiliaya}
            </H7>
          </View>
        </View>

        {last ? null : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyLocation",  {
            item:item,
            index:index,
          });
              // console.log(item)
            }}
          >
            <H7 Bold="400" style={{ color: COLORS.Vert2, marginLeft: 6 }}>
              Modifier
            </H7>
          </TouchableOpacity>
        )}
      </View>
      {Divider ? <View style={styles.Divider} /> : null}
    </>
  );
};

export default ItemAdresse;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: 5,
    marginVertical: 15,
    backgroundColor: COLORS.Gris,
  },
  Divider: {
    height: 1,
    opacity: 0.2,
    backgroundColor: COLORS.Noir,
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteBox: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 80,
  },
});
