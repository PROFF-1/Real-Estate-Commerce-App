import { StyleSheet, Text, View,Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { styles } from '../Styles/Styles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Image source={require('../assets/homescreenimage.png')}/>
      <View style={styles.homeTextContainer}>
          <Text style={styles.welcomeText}>WELCOME TO HOME FLOW</Text>
          <View>
          <Text style={styles.message1}>Dream A Home</Text>
          <View style={styles.homeTextInner}>
            <Text style={styles.message2}>Live It!</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.signIn}>
        <Image
          source={require('../assets/googleIcon.png')}
        />
        <Text style={styles.signInText}>
          Sign Up With Google
        </Text>
      </TouchableOpacity>
      <StatusBar/>
    </SafeAreaView>
  )
}

