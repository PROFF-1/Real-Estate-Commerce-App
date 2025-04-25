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


export default function Explore() {

  const params = useLocalSearchParams<{ query?: string; filter?:string;}>();

 

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
        keyExtractor={(item)=> item.$id}
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
         <View className="px-5">
          <View className="flex flex-row items-center justify-between mt-6">
            <TouchableOpacity className="flex items-center justify-center bg-blue-100 p-3 rounded-full" onPress={()=>router.back()}>
              <Image source={icons.backArrow} className="size-7"/>
            </TouchableOpacity>
            <Text className="text-lg font-rubik-medium text-black-300">Search for Your Dream Home</Text>
            <TouchableOpacity>
              <Image source={icons.bell} className="size-6"/>
            </TouchableOpacity>
          </View>
          <Search/>
          <View className="mt-5">
            <Filters/>
            <Text className="text-xl font-rubik-bold text-black-300 m-3">
              Found {properties?.length} properties
            </Text>
          </View>
         </View>
        }
      />
      
    </SafeAreaView>
  );
}
