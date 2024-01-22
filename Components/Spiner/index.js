import { View } from "react-native-animatable";
import { ActivityIndicator } from "react-native-paper";

import React from 'react'
import { COLORS } from "../Styles/theme";

// size = small || large
const Spinner = ({ color = COLORS.Vert2, size }) => {
  return (
    <ActivityIndicator animating={true} color={color} size={size || "small"} />
  );
};

export default Spinner;
