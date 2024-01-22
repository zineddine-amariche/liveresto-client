import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ArrowG from "../../Assets/Images/ArrowG.png";
import InfoImgCircl from "../../Assets/Images/InfoImgCircl.png";
import { StyleSheet } from "react-native";
import { H7 } from "../utils/TextComponents";
import { COLORS } from "../Styles/theme";
import HView from "../View/HView";

const ItemArrowRight = ({ title, Divider, last, Nav, item, Green }) => {
  return (
    <>
      <TouchableOpacity spaceBetween style={styles.item} onPress={() => {}}>
        <HView>
          {Green ? null : (
            <Image source={InfoImgCircl} style={{ marginRight: 10 }} />
          )}

          <H7
            Bold="400"
            style={{
              color: Green ? COLORS.Vert3 : COLORS.Vert3,
            }}
          >
            {title}
          </H7>
        </HView>
        {last ? null : <Image source={ArrowG} />}
      </TouchableOpacity>
      {Divider ? <View style={styles.Divider} /> : null}
    </>
  );
};

export default ItemArrowRight;

const styles = StyleSheet.create({
  item: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  Divider: {
    height: 1,
    opacity: 0.2,
    backgroundColor: COLORS.Noir,
  },
});
