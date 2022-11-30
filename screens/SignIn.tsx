import { View, Text, Modal, TouchableOpacity, TextInput,  StyleSheet } from 'react-native'
import React, { Component } from 'react'


interface Props {
    isLoading: boolean;
    email: string;
    password: string;
}

export default class Auth extends Component<Props> {


  constructor(props: Props) {

    super(props);
  
    this.state = {
      changeTab: false,
      setChangeTab: false,
      changeSignUp: false,
      setChangeSignUp: false,
      password: '',
      email: ''

    };
  }


    render() {

    const { isLoading, email, password } = this.props;


    const onSignIn = () => {
      // this is how to set The state
      this.setState({ isLoading });
      
    };
    
    return (
      <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.inputF}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="black"
          placeholder="First Name"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputF2}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="black"
          placeholder="Email Adress"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputF2}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="black"
          placeholder="Password"
          secureTextEntry={true}
        />
      </TouchableOpacity>

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
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      )}
    </View>
    )
  }
}

const styles = StyleSheet.create({
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
  inputF: {
    backgroundColor: "#F5F5DC",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: 20,
    marginTop: 50,
  },
  inputF2: {
    backgroundColor: "#F5F5DC",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    height: "50%",
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
    marginTop: 60,
    // marginBottom: 20,
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