import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";

const GoogleUp = () => {

  const navigation = useNavigation();

  const redirectUrl = "https://dev.devusol.net/google/"

  const clientId = "477985071118-keud3p5lajmp6p7l2hiirpogd2vlt1n1.apps.googleusercontent.com"




  const handlePress = async () => {
  
      const result = await WebBrowser.openAuthSessionAsync(
        `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code&scope=openid%20email%20profile`,
        redirectUrl
      );

      if (result.type === "success") {

        // get back the params from the url
        const params = Linking.parse(result.url);

        const { name, email, picture } = params.queryParams

        let userInfo = {
          name,
          email,
          picture,
        };

        navigation.navigate("HomeScreen", { userInfo });

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
