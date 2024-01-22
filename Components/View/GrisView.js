import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../Styles/theme'
import { StyleSheet } from 'react-native'

const GrisView = ({children,style}) => {
  return (
    <View style={[styles.container,{...style}]}>
      {children}
    </View>
  )
}

export default GrisView


const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        backgroundColor: COLORS.Gris,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignSelf:"center",
      },

  });
  