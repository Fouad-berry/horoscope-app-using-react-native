import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Image } from 'react-native';
import { StyleHoroscop } from '../Styles/StyleHoroscop';



export const DaysItem = ({item}) => {

  return (
    <TouchableOpacity style={StyleHoroscop.itemContainer}>
      <View>
        <Text style={StyleHoroscop.itemtext}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
