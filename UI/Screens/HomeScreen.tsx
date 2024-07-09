import { View, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleHome } from '../Styles/StyleHome'
import { useNavigation } from '@react-navigation/native';
import { ButtonHome } from '../Components/ButtonHome';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Tabs');
  };

  return (
    <View style={StyleHome.container}>
      <ImageBackground
        source={require('../../assets/Images/home_img3.jpeg')}
        resizeMode="cover"
        style={StyleHome.image}
      />
      <Text style={StyleHome.text} >Millionaire don't use horoscope, but billionaires do...</Text>
     <TouchableOpacity style={StyleHome.button} onPress={handleButtonPress} >
        <Text style={StyleHome.buttonText}>Let's Start</Text>
    </TouchableOpacity>
    </View>
  );
};
