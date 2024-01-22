import React, { useMemo } from "react";
import {
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../Styles/theme";

const CustomBackdrop = ({ animatedIndex, style }) => {
  const { dismiss, dismissAll } = useBottomSheetModal();
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [1, 2],
      [1, 2],
      Extrapolate.CLAMP
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: COLORS.BacKColorBottom,
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return (
    <Animated.View
      style={containerStyle}
      onPress={() => {
      }}
    >
      <TouchableOpacity
        onPress={() => {
            dismiss();
        }}
        style={{ flex: 1 }}
      ></TouchableOpacity>
    </Animated.View>
  );
};

export default CustomBackdrop;
