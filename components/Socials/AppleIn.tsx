import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';



export default class AppleIn extends Component {

  

  render() {
   
    const appleUp = () => {
      console.log('appleIn')
    }


    return (
      <View style={styles.container}>
      <TouchableOpacity onPress = {appleUp}>
        <View style={styles.circle}>
        <AntDesign name="apple-o" size={22} color="white" />
        </View>
      </TouchableOpacity>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#DEB887",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
