import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FbUp = () => {
  return (
    // make a small circle with a google logo
    <View style={styles.container}>
        <TouchableOpacity>
      <View style={styles.circle}>

        <Text style={styles.text}>F</Text>
        
      </View>
        </TouchableOpacity>
    </View>

  )
}

export default FbUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#DEB887',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
})