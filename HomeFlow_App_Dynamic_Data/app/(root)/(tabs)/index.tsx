import { Text, View, Image, TouchableOpacity, FlatList,Button, ActivityIndicator} from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/search";
import { Card, FeaturedCard } from "@/components/Card";
import Filters from "@/components/Filters";
import { useGlobalContext } from "@/lib/global-provider";
import seed from "@/lib/seed";
import { useAppwrite } from "@/lib/useAppwrite";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useEffect } from "react";
import NoResults from "@/components/NoResults";
export default function Index() {

  const {user} =useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?:string;}>();

  const {data:latestProperties, loading: latestPropertyLoading} = useAppwrite({
    fn: getLatestProperties
  })

  const {data: properties, loading, refetch}= useAppwrite({
    fn: getProperties,
    params:{
      filter: params.filter!,
      query: params.query!,
      limit : 6
    },
    skip: true
  })


  const handleCardPressed=(id:string)=> router.push(`/properties/${id}`)


  useEffect(()=>{
    refetch(
     { filter: params.filter!,
      query:params.query!,
      limit: 12 }
    )
  },[params.filter, params.query])
  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={properties}
        renderItem={
          ({item})=>{return(<Card item={item} onPress={()=>handleCardPressed(item.$id)}/>)}
        }
        keyExtractor={(item)=> item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading? (
          <ActivityIndicator size='large' className="text-primary-300 mt-5"/>
        ):<NoResults/>
        }
        ListHeaderComponent={
          <View className='px-5'>
          <View className="flex flex-row justify-between items-center mt-5">
            <View className='flex flex-row items-center'>
              <Image source={{uri: user?.avatar}} className="size-12 rounded-full"/>
              <View className="flex flex-col items-start ml-2 justify-center">
                <Text className='text-xs font-rubik text-black-100'>Good Morning</Text>
                <Text className="text-base font-rubik-medium text-balck-300">{user?.name}</Text>
              </View>
            </View>
            <Image source={icons.bell} className="size-6"/>
          </View>
          <Search/>
          <View className="my-5">
            <View className='flex flex-row item-center justify-between'>
              <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
              <TouchableOpacity>
                <Text className='text-base font-rubik-bold text-blue-700'>See All</Text>
              </TouchableOpacity>
            </View>
            {latestPropertyLoading? 
            <ActivityIndicator size='large'/> : !latestProperties || latestProperties.length===0 ? <NoResults/> : (
            <FlatList
              data={latestProperties}
              renderItem={({item})=><FeaturedCard item={item} onPress={()=>handleCardPressed(item.$id)}/>}
              keyExtractor={(item)=> item.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex gap-5 mt-5"
              bounces={false}
              />
            )}
          </View>
         
          <View className="my-5">
            <View className='flex flex-row item-center justify-between'>
              <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
              <TouchableOpacity>
                <Text className='text-base font-rubik-bold text-blue-700'>See All</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Filters/>
            </View>
           
          </View>
      </View>
        }
      />
      
    </SafeAreaView>
  );
}
