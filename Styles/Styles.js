import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS==='android'? StatusBar.currentHeight:0,

   
  },
  splashScreenContainer:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
  },

  authScreenContainer:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },

  homeScreenContainer:{
    flex:1,
    backgroundColor:'#fff',
  },

  authTextContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30
  },

  authTextInner:{
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
  },

  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical: 15,
    marginHorizontal:20,
    alignItems:'center',
    height:60
  },
  headerLeft:{
    flexDirection:'row',
    alignItems:'center',
  },

  greetings:{
    color:'grey',
    marginBottom: 6
  },

  name:{
    fontWeight:'500',
    fontSize: 22
  },


  searchSection:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    marginHorizontal:20,
    width:390,
    height:52,
    borderRadius: 6,
    paddingleft: 14,
    paddingRight: 16
  },

  searchBox:{
    backgroundColor:'#FBFBFD',
    width: '80%',
    height:'100%',
    paddingLeft: 20,
    marginHorizontal:10

  },

  icon:{
    height:20,
    width:20
  },
  featuredHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:20
  },

  featured:{
    fontSize:20,
    fontWeight:'bold',
  },


  sellAll:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline'
  },

  featuredHouses:{
    height:340,
    width: 250,
    marginRight:20
  },

  housesPhoto:{
    height:340,
    width:250,
    borderRadius:20
  }
})