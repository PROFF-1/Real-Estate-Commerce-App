import { View, Text,Image } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View>
      <Image source={require('../assets/logo.png')}/>
    </View>
  )
}