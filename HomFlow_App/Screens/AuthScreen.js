import { StyleSheet, Text, View,Image, SafeAreaView, TouchableOpacity,navigation } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { styles } from '../Styles/Styles';

export default function AuthScreen({navigation}) {
  return (
    <SafeAreaView style={styles.authScreenContainer}>
      <Image source={require('../assets/homescreenimage.png')}/>
      <View style={styles.authTextContainer}>
          <Text style={styles.welcomeText}>WELCOME TO HOME FLOW</Text>
          <View>
          <Text style={styles.message1}>Dream A Home</Text>
          <View style={styles.authTextInner}>
            <Text style={styles.message2}>Live It!</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.signIn} onPress={()=>{
        navigation.navigate('Home')
      }}>
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

