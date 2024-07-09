import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', title: '1', day:'lundi' },
  { id: '2', title: '2' },
  { id: '3', title: '3' },
  { id: '4', title: '4' },
  { id: '5', title: '5' },
];

export const Jourdate = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.contenu}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#f0f0f0',
    margin: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  contenu: {
    marginLeft: 15,
  }
});
