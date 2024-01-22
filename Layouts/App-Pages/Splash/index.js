import React from "react";
import { StatusBar } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../../Components/Styles/theme";
const SplashLaoder = () => {
  return (
    <View style={styles.container}>
     <StatusBar translucent={true} backgroundColor={"transparent"} />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.Blue2, COLORS.Blue2]}
        style={styles.LinearGradient}
      >
        <Image
          source={require("../../../Assets/Images/logo-live-resto.png")}
          style={styles.image}
        />
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  LinearGradient: {
    flex:1,
    justifyContent:"center",
    zIndex:1000
  },
  image: {
    alignSelf: "center",
  },
});

export default SplashLaoder;
