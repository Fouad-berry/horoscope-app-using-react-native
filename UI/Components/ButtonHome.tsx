import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export const ButtonHome = () => {
  return (
    <View>
    <TouchableOpacity style={styles.button} >
       <Text style={styles.buttonText} >Me</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
      borderWidth:1,
      borderRadius:25,
      paddingHorizontal:30,
      paddingVertical:13,
      marginBottom: '20%',
      backgroundColor:'black',
      marginHorizontal:140,
      marginTop:25,
  },
  buttonText:{
      color:'white',
  }
});
