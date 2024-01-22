import React from "react";
import { View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../../Components/Styles/theme";
import { H4 } from "../../../Components/utils/TextComponents";
import { styles } from "./styles";
const Laoding2 = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[COLORS.Blue2, COLORS.Blue2]}
      style={styles.container}
    >
      <View style={styles.BoxLoader}>
        <View>
          <Image
            source={require("../../../Assets/Images/logo-live-resto.png")}
            style={styles.image}
          />
          <View style={styles.BoxT}>
            <H4 style={styles.TextBody}>
              Noémie, laisse le hasard choisir le restaurant qui est fait pour
              toi ! 🔄
            </H4>
          </View>
        </View>

        <Image
          source={require("../../../Assets/Images/pana.png")}
          style={styles.image}
        />
      </View>
    </LinearGradient>
  );
};
export default Laoding2;
