import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { styles } from './Styles/Styles';
import SplashScreen from './Screens/SplashScreen';

export default function App() {


  function AppScreens(){
    return(
      <SplashScreen/>
    )
  }
  return (
    <View style={styles.container}>
      <AppScreens/>
      <StatusBar style="auto" />
    </View>
  );
}

