import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { Component } from "react";
import GoogleUp from "../components/Socials/GoogleUp";
import FbUp from "../components/Socials/FbUp";

interface Props {
  isLoading: any;
  email: string;
  password: string;
}

export default class Auth extends Component<Props, any> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
      password: "",
      email: "",
    };
  }

  render() {
    const { isLoading, email, password } = this.state;

    const onSignIn = () => {
      this.setState({ isLoading: true });
    };

    const handleRequest = () => {
      console.log("forgot password");
    }

    return (
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.inputF2}>
          <TextInput
            style={styles.inputText}
            placeholderTextColor="black"
            placeholder="Email Adress"
            onChangeText={(text) => this.setState({ email: text })}
            value={email}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputF2}>
          <TextInput
            style={styles.inputText}
            placeholderTextColor="black"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
            value={password}
          />
        </TouchableOpacity>

        <View style={styles.forgotPassword}>
          <TouchableOpacity
          onPress = {handleRequest}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orSignUp}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>or sign in with</Text>
          <View style={styles.line}></View>
        </View>


       



        {/* socials */}
        <View style={styles.socials}>
          <GoogleUp />
          <FbUp />
        </View>

        {isLoading ? (
          <Modal animationType="slide" transparent={true} visible={isLoading}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Loading...</Text>
              </View>
            </View>
          </Modal>
        ) : (
          <TouchableOpacity onPress={onSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  socials: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 30,
    marginBottom: 10,
  },
  forgotPassword: {
    alignItems: "flex-end",
    width: "80%",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  
  orSignUp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  orText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  line: {
    height: 1,
    width: 100,
    backgroundColor: "black",
  },

  tabTextContainer: {
    borderBottomWidth: 7,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#F5F5DC",
    paddingBottom: 5,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  tab: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  tab2: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  tabText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "white",
    height: "60%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "rgb(143, 188, 143)",
    opacity: 0.8,
    // cover the whole screen
    width: "100%",
    height: "100%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  inputText: {
    color: "black",
    width: "80%",
  },
  inputF2: {
    backgroundColor: "#F5F5DC",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    // marginBottom: 20,
    marginTop: 50,
  },
  inputContainer: {
    width: "80%",
    height: "60%",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "rgb(143, 188, 143)",
    borderRadius: 25,
  },
  button: {
    backgroundColor: "#F5F5DC",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 20,

    marginBottom: 30,
    // bottom: 40,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  topTextContainer: {
    alignItems: "center",
    marginTop: 20,
    flex: 1,
  },
  topText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    // fontFamily:
  },
});
