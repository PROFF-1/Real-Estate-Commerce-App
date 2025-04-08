import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
   
  },

  homeScreenContainer:{
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS==='android'? StatusBar.currentHeight:0,
    alignItems: 'center'
  },

  homeTextContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30
  },

  homeTextInner:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    height:60,
    width:200,
    borderRadius:5
  },
  message2:{
    color:'white',
    fontWeight:'bold',
    fontSize: 24
  },

  welcomeText:{
    color: 'gray',
    fontSize: 14,
    fontWeight:'bold',
    marginBottom:5

  },

  message1:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:5
  },

  signIn:{
    backgroundColor:'#edeef0',
    paddingHorizontal:100,
    paddingVertical:20,
    borderRadius:30,
    flexDirection:'row'
  },

  signInText:{
    fontWeight: 'bold',
    fontSize:16,
    marginLeft: 10
  }
})