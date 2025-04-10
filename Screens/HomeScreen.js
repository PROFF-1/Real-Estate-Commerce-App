import { View, Text,SafeAreaView,Image,TextInput, ScrollView,FlatList, TouchableOpacity,navigation} from 'react-native'
import React from 'react'
import { styles } from '../Styles/Styles'
import { StatusBar } from 'expo-status-bar'
import { houses, typesTab, newhouses} from '../Data/Data'

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.profile}>
              <Image source={require('../assets/profile.png')}
                style={{height: 60, width: 60, marginRight: 10}}
              />
            </View>
            <View>
              <Text style={styles.greetings}>Good Morning</Text>
              <Text style={styles.name}>Richmond Nyamedor</Text>
            </View>
          </View>
          <View>
            <Image source={require('../assets/Notification.png')}
            />
          </View>
        </View>
        <View style={styles.searchSection}>
          <Image source={require('../assets/Search.png')}
            style={styles.icon}
            tintColor='black'
          />
          <TextInput
            placeholder='Search something'
            style={styles.searchBox}
          />
          <Image source={require('../assets/Filter.png')}
            style={styles.icon}
          tintColor='black'
          />
        </View>
        <View style={styles.featuredHeader}>
          <Text style={styles.featured}>Featured</Text>
          <Text style={styles.sellAll}>See All</Text>
        </View>
        <View style={{paddingHorizontal:15,marginVertical:30,position:'relative'}}>
          <FlatList
          data={houses}
          renderItem={({item})=>{
            return(
              <View style={styles.featuredHouses}>
                <Image
                source={item.photo}
                style={styles.housesPhoto}
                />
                <TouchableOpacity style={styles.houseDetails}
                
                 onPress={item.id==='2'?()=>
                  navigation.navigate('Details'): undefined
                 }
                >
                    <Text style={styles.houseName}>
                      {item.name}
                    </Text>
                    <Text style={styles.location}>
                      {item.location}
                    </Text>
                    <View style={styles.amountAndLike }>
                      <Text style={styles.amount}>{item.amount}</Text>
                      <Image source={require('../assets/like.png')} 
                      />
                    </View>
                </TouchableOpacity>
                <View style={styles.ratingContainer}>
                  <Image source={require("../assets/Group.png")}
                    style={{height:15, width:15, marginRight: 5}}
                  />
                  <Text>{item.rating}</Text>
                </View>
              </View>
            )
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item=>(item.id)}
          />
        </View>
        <View style={styles.featuredHeader}>
          <Text style={styles.featured}>Our Recommendation</Text>
          <Text style={styles.sellAll}>See All</Text>
        </View>
        <View style={styles.tabsContainer}>
          <FlatList
          data={typesTab}
          renderItem={({item})=>{
            return(
              <View style={[styles.tabs, {backgroundColor:item.id==='1'? 'black':'#c7c9c8'}]}>
                <Text style={{color:item.id==='1'? 'white':'black'}}>{item.name}</Text>
              </View>
            )
          }}
           horizontal
           showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{paddingHorizontal:9}}>
          <FlatList
             data={newhouses}
             renderItem={({item})=>{
               return(
                 <View style={styles.itemHolder}>
                  <View style={styles.houseImageContainer}>
                    <Image source={item.photo}
                    
                    style={{height:154,width:159,borderRadius:10}}
                    />
                  </View>
                  <View>
                    <Text style={styles.otherHouseName}>{item.name}</Text>
                    <Text style={styles.otherHouseLocation}>{item.location}</Text>
                    <View style={styles.amountAndLike}>
                      <Text style={styles.otherHouseAmount}>
                        {item.amount}
                      </Text>
                      <Image source={require('../assets/like.png')}
                      tintColor='black'/>
                    </View>
                  </View>
                  <View style={styles.ratingContainer2}>
                  <Image source={require("../assets/Group.png")}
                    style={{height:10, width:10, marginRight: 5}}
                  />
                  <Text>{item.rating}</Text>
                </View>
                 </View>
               )
             }}
             vertical
             numColumns={2}
             showsHorizontalScrollIndicator={false}
             keyExtractor={item=>(item.id)}
             nestedScrollEnabled={false}
          />
        </View>
        <StatusBar/>
      </ScrollView>
    </SafeAreaView>
  )
}