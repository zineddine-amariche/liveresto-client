import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const RenderHeader = ({funHeader}) => {

 
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.panelHeader} onPress={funHeader}>
        <View style={styles.panelHandle} />
      </TouchableOpacity>
    </View>
  );
};

export default RenderHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#eee",
    shadowColor: "#FFFFFF",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
});
