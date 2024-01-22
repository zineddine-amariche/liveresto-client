import React from "react";
import { StatusBar } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FacebookSvg } from "../../../Assets/Svg/Facebook";
import { LogoSvgLiveRestoClient } from "../../../Assets/Svg/Logo";
import { COLORS } from "../../../Components/Styles/theme";
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.Blue2, COLORS.Blue2]}
        style={styles.LinearGradient}
      >
        {/* <Image
         source={require("../../../Assets/Images/logo-live-resto.png")}
         style={styles.image}
       /> */}

        <View
          style={{
            alignSelf: "center",
            width: 130,
            height: 130,
          }}
        >
          <LogoSvgLiveRestoClient />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LinearGradient: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
  },
});
