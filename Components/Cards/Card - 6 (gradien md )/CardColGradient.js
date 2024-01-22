import { Switch } from "react-native";
import React, { useState } from "react";
import { BoldTxt, Txt } from "../../utils/TextComponents";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../Styles/theme";
import { StyleSheet } from "react-native";
import { View } from "react-native-animatable";

const CardColGradient = ({ children,title,style }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[COLORS.Blue2,COLORS.Vert3]}
      style={styles.container}
      {...style}
    >
      <View style={styles.BoxLeft}>
        <Txt Bold="700" style={styles.TextGR}>{title}</Txt>
        <BoldTxt style={styles.TextGR}>{children}</BoldTxt>
      </View>
      <Switch
        trackColor={{ false: COLORS.Blanc, true: COLORS.Blanc }}
        thumbColor={isEnabled ? COLORS.Vert3 : COLORS.Blanc}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </LinearGradient>
  );
};

export default CardColGradient;

const styles = StyleSheet.create({
  container: {
    height: 85,
    borderRadius: 5,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 15,
    width: "100%",
    alignSelf: "center",
  },
  TextGR: {
    color: COLORS.Blanc,
    paddingRight:10
  },
  BoxLeft:{
    maxWidth:"90%"
  }
});
