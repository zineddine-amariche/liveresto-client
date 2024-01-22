import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ArrowG from "../../../../../Assets/Images/ArrowG.png";
import { StyleSheet } from "react-native";
import { H7 } from "../../../../../Components/utils/TextComponents";
import { COLORS } from "../../../../../Components/Styles/theme";

const ItemAdresse = ({ title, Divider, last, Nav, item }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          Nav(item?.Path);
        }}
      >
        <View style={styles.Row}>
          <H7>📍  </H7>
          <View>
            <H7
              style={{
                color: title === "📤  Déconnexion" ? COLORS.Rouge : COLORS.Noir,
              }}
            >
              {item.title}
            </H7>
            <H7
              Bold="400"
              style={{
                color: title === "📤  Déconnexion" ? COLORS.Rouge : COLORS.Noir,
              }}
            >
              {item.sousTitle}
            </H7>
          </View>
        </View>

        {last ? null : (
          <H7 Bold="400" style={{ color: COLORS.Vert2 }}>
            ✏ Modifier{" "}
          </H7>
        )}
      </TouchableOpacity>
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
  },
  Divider: {
    height: 1,
    opacity: 0.2,
    backgroundColor: COLORS.Noir,
  },
  Row:{
    flexDirection:"row",
    alignItems:'center'
  }
});
