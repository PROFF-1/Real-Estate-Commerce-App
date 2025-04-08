import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from '../Styles/Styles'

export default function SplashScreen() {
  return (
    <View style={styles.splashScreenContainer}>
      <View>
        <Image source={require('../assets/logo.png')}
        tintColor='black'/>
      </View>
    </View>
  )
}