import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";

const GoogleUp = () => {

  const navigation = useNavigation();

  const handlePress = async () => {

    const CLIENT_ID = "477985071118-i7mijogvf7v1v3th996f2oo0vpetilq0.apps.googleusercontent.com"

    const REDIRECT_URI = "https://dev.devusol.net/google"


      const result = await WebBrowser.openAuthSessionAsync(
        `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&access_type=offline&state=1234_purpleGoogle&prompt=consent`,
        REDIRECT_URI
      );    

      if (result.type === "success") {

        // get back the params from the url
        const params = Linking.parse(result.url);

        const { email, name, picture } = params.queryParams;

        const user = {
          email,
          name,
          picture,
        };

        // navigate to the HomeScreen and pass the user object
        navigation.navigate("HomeScreen", { user });

      }



  };


  return (
    // make a small circle with a google logo
    <View style={styles.container}>
      <TouchableOpacity
      onPress={handlePress}
      >
        <View style={styles.circle}>
          <Text style={styles.text}>G</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleUp;

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
    // backgroundColor of light brown
    backgroundColor: "#DEB887",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
