import { ScrollView, StyleSheet, Text, View,Image, SafeAreaView, FlatList,Platform, TouchableOpacity} from 'react-native'
import { styles } from '../Styles/Styles'
import React from 'react'
import { amenities, facilities } from '../Data/Data'

export default function DetailsScreen() {
  return (
    <SafeAreaView style={styles.DetailsScreenContainer}>
      <ScrollView style={{marginBottom: Platform.OS === 'android'? 70: 45}}>
      
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
                      style={{height:20, width:20}} tintColor='black'/>
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
              
              style={{height:33,width:33}}
              tintColor='black'/>
              <Image source={require('../assets/call.png')}
              
              style={{height:33,width:33}}
              tintColor='black'/>
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
        <View style={styles.facilitiesOuterContainer}>
          <Text style={styles.facilities}>Faclities</Text>
          <View style={styles.facilitiesFlatlistHolder}>
            <FlatList
             data={facilities}
             renderItem={({item})=>{
              return(
                <View style={styles.facilitiesContainer}>
                  <View style={styles.facilityIconHolder}>
                    <Image source={item.icon} tintColor='black'
                    style={{height:28,width:28}}/>
                  </View>
                  <Text style={styles.facilityName}>
                    {item.name}
                  </Text>
                </View>
              )
             }}
             numColumns={4}
             showsHorizontalScrollIndicator={false}
             scrollEnabled={false}
            />
          </View>
        </View>

        {/* Gallery Section */}
        <View style={styles.gallerySection}>
          <Text style={styles.gallery}>Gallery</Text>
          <View style={styles.galleryContainer}>
            <Image source={require('../assets/house7.png')}/>
            <Image source={require('../assets/house8.png')}/>
            <Image source={require('../assets/house9.png')}/>
          </View>
        </View>

        {/*Location section */}
        <View style={styles.locationSection}>
          <Text style={styles.location}>Location</Text>
          <View style={styles.locationDesc}>
            <Image source={require('../assets/location.png')}
            style={styles.locationIcon}/>
            <Text style={styles.address}>Grand City St. 100, New York, United States</Text>
          </View>
          <Image source={require('../assets/map.png')}/>
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.reviewHeader}>
            <View style={styles.reviewHeaderLeft}>
              <Image source={require('../assets/Group.png')}
               style={{height:19, width:20}}
              />
              <Text style={styles.reviewText}>4.8 (1,275 reviews)</Text>
            </View>
            <Text style={styles.sellAll}> See All</Text>
          </View>
          <View style={styles.reviewer}>
            <Image source={require('../assets/reviewer.png')}
            
             style={styles.reviewerProfile}
            />
            <Text style={styles.reviewerName}>Victor Owusu</Text>
          </View>
          <Text style={styles.review}>The apartment is very clean and modern. I really like the interior design. Looks like I'll feel at home 😍</Text>
          <View style={styles.likeAndDays}>
            <View style={styles.likeAndDaysLeft}>
              <Image source={require('../assets/like.png')}
              tintColor='black'
              style={{marginRight:10}}/>
              <Text style={styles.numberOfLikes}>938</Text>
            </View>
            <Text style={styles.days}>6 days ago</Text>
          </View>
        </View>

      </ScrollView>
        
      <View style={styles.priceTag}>
          <View>
            <Text style={styles.price}>PRICE</Text>
            <Text style={styles.$17821}>$17821</Text>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookNow}>Book Now</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

