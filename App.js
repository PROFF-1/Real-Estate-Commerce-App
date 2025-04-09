import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './Styles/Styles';
import SplashScreen from './Screens/SplashScreen';
import AuthScreen from './Screens/AuthScreen';
import HomeScreen from './Screens/HomeScreen';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
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
          </>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
