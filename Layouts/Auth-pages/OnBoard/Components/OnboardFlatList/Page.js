import React from 'react';
import {View, StyleSheet, useWindowDimensions, Animated,Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');

export default function Page({data, scrollX}) {

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.indicator, {opacity, transform: [{scale}]}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:height*.05,
    backgroundColor:'#6F5ED4',
    justifyContent:'center',
    alignItems:'center'
    
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#FBA0EC',
    marginHorizontal: 8,
  },
});
