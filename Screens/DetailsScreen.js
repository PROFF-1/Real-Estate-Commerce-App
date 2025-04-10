import { ScrollView, StyleSheet, Text, View,Image, SafeAreaView, FlatList} from 'react-native'
import { styles } from '../Styles/Styles'
import React from 'react'
import { amenities } from '../Data/Data'

export default function DetailsScreen() {
  return (
    <SafeAreaView style={styles.DetailsScreenContainer}>
      <ScrollView>

        {/* House Details Section */}
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
          <View style={{height:50, marginTop:16,marginBottom:10}}>
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

        {/* Agent Details Section */}
        <View style={{marginHorizontal:15}}>
          <Text style={styles.agent}>Agent</Text>
          <View style={styles.agentDetailsContainer}>
            <View style={styles.agentDetailsLeft}>
              <Image source={require('../assets/Ellipse.png')}/>
              <View>
                <Text style={styles.agentName}>Richmond Nyamedor</Text>
                <Text style={styles.agentStatus}>Owner</Text>
              </View>
            </View>
            <View style={styles.agentDetailsRight}>
              <Image source={require('../assets/Chat.png')}
              
              style={{height:33,width:33}}/>
              <Image source={require('../assets/call.png')}
              
              style={{height:33,width:33}}/>
            </View>
          </View>
        </View>

        {/* Overview Section  */}
        <View style={styles.overviewContainer}>
          <Text style={styles.overviewHeader}>Overview</Text>
          <Text style={styles.overview}>
          Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and city views. Minutes from downtown, dining, and transit.
          </Text>
        </View>

        {/* Faclities Section */}
        <View>
          <Text>Faclities</Text>
          <View>
            <FlatList
             data={}
             renderItem={}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

