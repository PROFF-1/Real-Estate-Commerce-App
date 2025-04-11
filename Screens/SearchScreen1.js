import { StyleSheet, Text, View,SafeAreaView, ScrollView,Image,TextInput,FlatList} from 'react-native'
import React from 'react'
import { styles } from '../Styles/Styles'
import { typesTab, newhouses} from '../Data/Data'

export default function SearchScreen1() {
  return (
    <SafeAreaView style={styles.searchScreen1Container}>
      <ScrollView>
        <View style= {styles.searchScreen1Header}>
          <View style={styles.arrowContainer}>
            <Image source={require('../assets/ArrowLeft.png')}/>
          </View>
          <Text style={styles.headerText}>Search for Your Ideal Home</Text>
          <Image source={require('../assets/Notification.png')}/>
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
              nestedScrollEnabled={true} 
            />
        </View>
        <View style={styles.searchResultsContainer}>
          <Text style={styles.overviewHeader}>Found 182 Apartments</Text>
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
              nestedScrollEnabled={true}
              scrollEnabled={false}
          />
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

