import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from '../Screens/HomeScreen';
import { SignsScreen } from '../Screens/SignsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HoroscopeScreen } from '../Screens/HoroscopeScreen';
import { DailyScreen } from '../Screens/DailyScreen';

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: { backgroundColor: 'grey' },
      }}
    >
      <Tab.Screen
        name="Signs"
        component={SignsScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Horoscop"
        component={HoroscopeScreen}
        options={{
          tabBarLabel: 'Horoscope',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="earth" color={color} size={size} />),
          headerShown: false,
/*           tabBarBadge: 2, */
        }}
      />
            <Tab.Screen
        name="Daily"
        component={DailyScreen}
        options={{
          tabBarLabel: 'Daily',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="earth" color={color} size={size} />),
          headerShown: false,
/*           tabBarBadge: 2, */
        }}
      />
    </Tab.Navigator>
  );
}