import React, {useRef} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');

function Shape({scrollX}) {
  const mod = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );
  const rotate = mod.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['-37deg', '0deg', '-37deg'],
  });
  return (
    <Animated.View
      style={[
        styles.back,
        {width: height, height: height, transform: [{rotate: '-37deg'}]},
      ]}
    />
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#fff',
    borderRadius: 100,
    position: 'absolute',

    top: -height * 0.63,
    left: -height * 0.2,
  },
});
export default Shape;
