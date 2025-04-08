import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../Styles/Styles'

export default function HomeScreen() {
  return (
    <View style={styles.homeScreenContainer}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.profile}>

          </View>
          <View>
            <Text>Good Morning</Text>
            <Text>Richmond Nyamedor</Text>
          </View>
        </View>
        <View>
          
        </View>
      </View>
    </View>
  )
}