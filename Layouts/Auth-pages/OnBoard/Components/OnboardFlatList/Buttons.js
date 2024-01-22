import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { useSelector } from 'react-redux';
// import image from '../../../../../Assets/onboarding/Tracé6.png';
function Buttons({nextScroll, PrvtScroll, skipSlide, index}) {

  const {width} = useWindowDimensions();
  const Tablet = useSelector(state => state.Tab);
  const {IsTab} = Tablet;
  // console.log('IsTab', IsTab,width)
  const CustWi = IsTab ? width >= 880 ? '10%' : '17%' : width <= 400 ? '25%' :  '19%'
  const CustWiR = IsTab ? '-17%' :'-25%'
  return (
    <View style={styles.ContainerBtn}>
      {index == 0 ? (
        <View></View>
      ) : (
        <TouchableOpacity
          onPress={PrvtScroll}
          style={[styles.button,{width:CustWi}]}
          activeOpacity={0.6}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff',marginBottom:20}}>
            Precedent
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={nextScroll}
        style={[styles.button,{width:CustWi}]}
        activeOpacity={0.6}>
        {/* <Image
          onPress={nextScroll}
          source={image}
          style={[
            styles.img,
            {
              resizeMode: 'cover',
              position: 'absolute',
              bottom: '-65%',
              right:CustWiR
            },
          ]}
        /> */}
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom:20}}>
          Suivant
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerBtn: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingBottom: 17,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#6F5fD4',
  },
  button1: {
    backgroundColor: '#ffffff',
    borderRadius: 80,
    position: 'absolute',
    bottom: 700,
    left: 160,
  },

  text: {
    fontWeight: '300',
    fontSize: 20,
    color: '#E81414',
  },
});

export default Buttons;
