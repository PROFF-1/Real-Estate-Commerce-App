import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { styles } from './Styles/Styles';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import { useEffect, useState } from 'react';

export default function App() {


  function AppScreens(){
    const [isSplash, setIsSplash]= useState(true)

    useEffect(()=>{
      setTimeout(()=>{
        setIsSplash(false)
      }, 5000)
    })

    return(
      <>
      {isSplash?
      <SplashScreen/>:
      <HomeScreen/>}
      </>
    )
  }
  return (
    <View style={styles.container}>
      <AppScreens/>
      <StatusBar style="auto" />
    </View>
  );
}

