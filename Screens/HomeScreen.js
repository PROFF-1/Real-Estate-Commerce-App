import { View, Text,SafeAreaView,Image,TextInput, ScrollView,FlatList} from 'react-native'
import React from 'react'
import { styles } from '../Styles/Styles'
import { StatusBar } from 'expo-status-bar'
import { houses, typesTab } from '../Data/Data'

export default function HomeScreen() {
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
        <View style={{paddingHorizontal:20,marginVertical:30}}>
          <FlatList
          data={houses}
          renderItem={({item})=>{
            return(
              <View style={styles.featuredHouses}>
                <Image
                source={item.photo}
                style={styles.housesPhoto}
                />
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
        <View>
          <FlatList
          data={typesTab}
          renderItem={({item})=>{
            return(
              <View>
                <Text>{item.name}</Text>
              </View>
            )
          }}/>
        </View>
        <StatusBar/>
      </ScrollView>
    </SafeAreaView>
  )
}