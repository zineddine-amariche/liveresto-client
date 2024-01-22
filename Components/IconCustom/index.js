import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const IconCustom = ({source}) => {
  return (
    <View style={styles.icon}>
      <Image source={source}     />
    </View>
  )
}

export default IconCustom

const styles = StyleSheet.create({
    icon:{
        marginRight:10
    }
})