import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './UI/Screens/HomeScreen';
import { Tabs } from './UI/Tabs/Tabs';
import * as Font from 'expo-font';
import { HoroscopeScreen } from './UI/Screens/HoroscopeScreen';

/* async function loadFonts() {
  await Font.loadAsync({
    Caveat: require('./assets/Fonts/Caveat.ttf'),
  });
} */

const Stack = createNativeStackNavigator();

const App = () => {
/*   React.useEffect(() => {
    loadFonts();
  }, []); */ // Chargement des polices lors du montage initial

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Horoscop" component={HoroscopeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
