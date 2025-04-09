import { ScrollView, StyleSheet, Text, View,Image, SafeAreaView} from 'react-native'
import { styles } from '../Styles/Styles'
import React from 'react'

export default function DetailsScreen() {
  return (
    <SafeAreaView style={styles.DetailsScreenContainer}>
      <ScrollView>
        <Image source={require('../assets/house6.png')}/>
        <View style={styles.eachhouseDetails}>
          <Text> Modernica Apartments</Text>
          <View>
            <View>
              <Text> Apartment</Text>
            </View>
            <View>
              <Image source={require('../assets/Group.png')}/>
              <Text>4.8(1,257 reviews)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

