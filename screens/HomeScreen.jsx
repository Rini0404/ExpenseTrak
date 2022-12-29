// class component
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';

export default class HomeScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
  }



  render() {

   const { userInfo } = this.props.route.params

   console.log(userInfo)

    return (
      // make a small circle with a google logo
      <View style={styles.container}>
        {/* print props */}
        <Text style={styles.info}>{JSON.stringify(userInfo)}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: 20,
    color: 'white',
  },
});
