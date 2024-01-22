import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const VView = ({ children,style }) => {
  return <View style={styles.container}
      {...style}
  
  
  >{children}</View>;
};

export default VView;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
