import { StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";

import * as WebBrowser from 'expo-web-browser';
import { useAuthRequest, makeRedirectUri } from "expo-auth-session";
import React, { useState } from 'react';
import Constants from "expo-constants";

// ios cliet id: 614718606763-98j51jjhlgn4p4sbtrahtm9eoru0bfkk.apps.googleusercontent.com

const discovery = {
  // for google
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://www.googleapis.com/oauth2/v4/token",
};

const USE_PROXY = Platform.select({
  web: false,
  default: Constants.appOwnership === "standalone" ? false : true,
  
});

const REDIRECT_URI = makeRedirectUri({
  useProxy: USE_PROXY,
  native: "loginauth://redirect",
});

WebBrowser.maybeCompleteAuthSession();


const GoogleUp = () => {

  
  const [authRequest, authResponse, promptAsync] = useAuthRequest(
    {
      clientId: "CLIENT_ID",
      usePKCE: false,
      scopes: ["openid", "profile", "email"],
      redirectUri: `https://dev.devusol.net/expoAuth/`,
      extraParams: {
        // On Android it will just skip right past sign in otherwise
        show_dialog: "false",
      },
    },
    discovery
  );
  
  React.useEffect(() => {
    if (authResponse) {
      console.log(authResponse);
    }
  }, [authResponse]);

          


  return (
    // make a small circle with a google logo
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          promptAsync({ useProxy: false });
        }}
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
