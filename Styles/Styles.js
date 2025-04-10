import { StyleSheet, Text, View,Platform,StatusBar } from 'react-native'
import React from 'react'
import DetailsScreen from '../Screens/DetailsScreen'
import { amenities, facilities } from '../Data/Data'

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
    alignItems: 'center',
    paddingTop: Platform.OS==='android'? StatusBar.currentHeight:0,
  },
  DetailsScreenContainer:{
    flex: 1,
    backgroundColor: '#fff',
  },

  homeScreenContainer:{
    flex:1,
    backgroundColor:'#edeff0',
    paddingTop: Platform.OS==='android'? StatusBar.currentHeight:0,
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
    marginHorizontal:15
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
  },

  tabs:{
    alignContent:'center',
    justifyContent:'space-between',
    paddingVertical:8,
    paddingHorizontal:20,
    borderRadius:30,
    marginHorizontal:8
  },
  tabsContainer:{
    paddingHorizontal:20,
    marginVertical:20
   
  },

  houseDetails:{
    backgroundColor:'green',
    position:'absolute',
    bottom:0,
    width:'100%',
    height:158,
    backgroundColor:'rgba(0,0,0,0.25)',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    paddingTop:50,
    paddingHorizontal: 16,
    
  },

  houseName:{
    fontSize: 20,
    color:'white',
    fontWeight:'bold',
    marginBottom:10,
  },

  location:{
    color:'white',
    fontSize:16,
    marginBottom:10,

  },

  amountAndLike:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },

  ratingContainer:{
    position:'absolute',
    backgroundColor:'white',
    flexDirection:'row',
    paddingHorizontal:12,
    paddingVertical:4,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'space-between',
    top:18,
    right:18
  },
  
  ratingContainer2:{
    position:'absolute',
    backgroundColor:'white',
    flexDirection:'row',
    paddingHorizontal:6,
    paddingVertical:4,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'space-between',
    top:12,
    right:12
  },

  amount:{
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  },

  houseImageContainer:{
    height:154,
    width:159,
    
  },

  itemHolder:{
    backgroundColor:'#fff',
    marginHorizontal:5,
    marginVertical:16,
   paddingTop:14,
   paddingHorizontal:14,
   paddingBottom:20,
   borderRadius:12
  },

  otherHouseName:{
    fontWeight:'bold',
    fontSize:16,
    marginTop:12
  },


  otherHouseLocation: {
    fonSize: 12,
    color: '#8c8e98',
    marginVertical:10
  },


  otherHouseAmount:{
    fontSize: 16,
    fontWeight:'bold'
  },

  eachhouseDetails:{
    marginVertical:24,
    marginHorizontal:15
  },


  apartmentName:{
    fontWeight: '700',
    fontSize: 24,
    marginBottom:16
  },

  typeTag:{
    backgroundColor: '#d9dbdb',
    paddingVertical:6,
    paddingHorizontal:10,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
    marginRight: 20
  },

  tagContainer:{
    flexDirection:'row'
  },

  ratingAndReview:{
    flexDirection:'row',
    alignItems:'center',

  },
  
  Apartment:{
    fontWeight: 'bold',
    fontSize: 10
  },

  reviewNumber:{
    fontWeight: 'bold',
    color: 'grey'
  },

  amenitiesContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginRight:18
  },

  iconHolder: {
    backgroundColor:'#d9dbdb',
    padding:12,
    borderRadius:'50%',
    marginRight: 8
  },

  amenitiesName:{
    fontSize:16,
    fontWeight: 'bold'
  },

  agentDetailsContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:70

  },

  agentDetailsLeft:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width: '65%'
  },
  agentDetailsRight:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'20%'
  },

  agent:{
    marginBottom: 10,
    fontWeight:'bold',
    fontSize:20
  },

  agentName:{
    fontWeight:'bold',
    fontSize: 18,
    marginBottom:4
  },

  agentStatus:{
    fontSize:14,
    fontWeight:'bold',
    color:'grey'
  },

  overviewContainer:{
    marginHorizontal:15,
    marginVertical:30
  },

  overviewHeader:{
    fontSize: 20,
    fontWeight:'bold',
    marginBottom:12,
    fontFamily:'rubik'

  },
  overview:{
    fontSize: 16,
    color:'grey',
    fontFamily:'rubik',
    lineHeight:25
    

  },

  facilitiesContainer:{
    marginRight:8,
    marginBottom:20,
  
    alignItems:'center',
    justifyContent:'center'
  },

  facilitiesOuterContainer:{
    marginHorizontal:15,
    marginVertical:25
  },

  facilitiesFlatlistHolder:{
    alignItems:'center'
  },
  facilities:{
    marginBottom: 20,
    fontSize:20,
    fontWeight:'bold'
  },
  facilityIconHolder:{
    backgroundColor:'#d9dbdb',
    height:60,
    width:60,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'50%',
    marginBottom:8,
    marginHorizontal:7.4
  },

  facilityName:{
    fontSize:14,
    fontWeight:'400',
    fontFamily:'rubik'
  },

  galleryContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },

  gallerySection:{
    marginHorizontal:15,
  },
  gallery:{
    marginBottom:20,
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'rubik'
  },

  
})