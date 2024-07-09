import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { StyleHoroscop } from '../Styles/StyleHoroscop';
import { DaysItem } from '../Components/DaysItem';

export const HoroscopeScreen = ({ route }) => {
  const { sign } = route.params;

  const days = [
    // Les données de vos signes
    {
      id: '1',
      text: 'Daily',
    },
    {
      id: '2',
      text: 'Weekly',
    },
    {
      id: '3',
      text: 'Monthly',
    },
    {
      id: '4',
      text: 'Year',
    },
  ];

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Images/horoscop_img.jpg')} style={styles.backgroundImage} />
      <ScrollView contentContainerStyle={StyleHoroscop.contentContainer}>
        <View style={StyleHoroscop.container}>
          <Image style={StyleHoroscop.img} source={sign.image} />
          <Text style={StyleHoroscop.text}>{sign.description}</Text>
          <Text style={StyleHoroscop.date}>{sign.date}</Text>
        </View>

        <View style={StyleHoroscop.containerday}>
          <FlatList
            data={days}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <DaysItem item={item} />;
            }}
          />
        </View>
        
        <View>
          <Text style={StyleHoroscop.descri}>
            {sign.firstext}
          </Text>
        </View>

        <Text style={StyleHoroscop.carac}>Caractéristiques</Text>

        <View>
          <Text style={StyleHoroscop.descri}>
          {sign.secondtext}
          </Text>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
