import { StatusBar } from 'expo-status-bar';
import { View,Modal,Text,Button,SafeAreaView, TouchableOpacity,Pressable} from 'react-native';
import { styles } from './Styles/Styles';
import SplashScreen from './Screens/SplashScreen';
import AuthScreen from './Screens/AuthScreen';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen1 from './Screens/SearchScreen1';
import SearchScreen2 from './Screens/SearchScreen2';
import BottomSheet from './BottomSheet';


const Stack = createNativeStackNavigator();

function AppScreen() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplash(false), 5000);
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSplash ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Details" component={SearchScreen1} />
            <Stack.Screen name="Details" component={SearchScreen2} />



          </>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default function App(){

  const [isModal, setIsModal]= useState(false)
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>setIsModal(true)}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Launch Modal</Text>
      </TouchableOpacity>

      {
        isModal && <BottomSheet setIsModal={setIsModal}/>
      }
      
    </View>
  )
}
