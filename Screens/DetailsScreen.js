import { ScrollView, StyleSheet, Text, View,Image, SafeAreaView, FlatList} from 'react-native'
import { styles } from '../Styles/Styles'
import React from 'react'
import { amenities } from '../Data/Data'

export default function DetailsScreen() {
  return (
    <SafeAreaView style={styles.DetailsScreenContainer}>
      <ScrollView>
        <Image source={require('../assets/house6.png')}/>
        <View style={styles.eachhouseDetails}>
          <Text style={styles.apartmentName}> Modernica Apartment</Text>
          <View  style={styles.tagContainer}>
            <View style={styles.typeTag}>
              <Text style={styles.Apartment}> APARTMENT</Text>
            </View>
            <View style={styles.ratingAndReview}>
              <Image source={require('../assets/Group.png')}
                style={{height:20, width:20, marginRight: 10}}
              />
              <Text style={styles.reviewNumber}>4.8 (1,257 reviews)</Text>
            </View>
          </View>
          <View style={{height:50, marginTop:16,marginBottom: 60}}>
            <FlatList
              data={amenities}
              renderItem={({item})=>{
                return(
                  <View style={styles.amenitiesContainer}>
                    <View style={styles.iconHolder}>
                      <Image source={item.icon}
                      style={{height:20, width:20}}/>
                    </View>
                    <Text style={styles.amenitiesName}>{item.name}</Text>
                  </View>
                )
              }}
              horizontal
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
            />
         </View>

        </View>
        <View>
          <Text>Agent</Text>
          <View>
            <View>
              <Image/>
              <Text></Text>
              <Text></Text>
            </View>
            <View>
              <Image/>
              <Image/>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

