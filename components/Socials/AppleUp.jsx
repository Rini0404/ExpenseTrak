import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';
import * as AppleAuthentication from 'expo-apple-authentication';

export default class Apple extends Component {



  render() {

  

   
    const appleUp = async() => {
      try {
        const credential = await AppleAuthentication.signInAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
          ],
        });

        console.log(credential)

        // decode 
        const { identityToken, nonce } = credential;
        if (identityToken) {
          const jwt = require('jwt-decode');
          const decoded = jwt(identityToken);
          console.log(decoded);
        }
          
      } catch (e) {
        if (e.code === 'ERR_CANCELED') {
          // handle that the user canceled the sign-in flow
        } else {
          // handle other errors
        }
      }


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
