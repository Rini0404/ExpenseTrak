import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import SignIn from "./SignIn";
import GoogleUp from "../components/Socials/GoogleUp";
import FbUp from "../components/Socials/FbUp";

interface Props {
  isLoading: boolean;
  email: string;
  password: string;
}

// const Sig

export default function Auth(props: Props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  // const DissmissKeyboard = ({ children }) => (
  //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //     {children}
  //   </TouchableWithoutFeedback>
  // );

  const onSignUp = () => {
    setIsLoading(true);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const unHidePassword = () => {
    console.log("unhide password");
  };

  const [changeTab, setChangeTab] = React.useState(true);

  const handleChange = () => {
    setChangeTab(true);
    setChangeSignUp(false);
  };
  const [changeSignUp, setChangeSignUp] = React.useState(false);

  const handleOtherChange = () => {
    setChangeTab(false);
    setChangeSignUp(true);
  };

  return (
    <View style={styles.container}>
      {/* tabs for modal */}
      <View style={styles.tabs}>
        {changeTab ? (
          <TouchableOpacity onPress={handleChange} style={styles.tab}>
            <View style={styles.tabTextContainer}>
              <Text style={styles.tabText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleChange} style={styles.tab}>
            <Text style={styles.tabText}>Sign In</Text>
          </TouchableOpacity>
        )}

        {changeSignUp ? (
          <TouchableOpacity onPress={handleOtherChange} style={styles.tab2}>
            <View style={styles.tabTextContainer}>
              <Text style={styles.tabText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleOtherChange} style={styles.tab2}>
            <Text style={styles.tabText}>Sign Up</Text>
          </TouchableOpacity>
        )}
      </View>

      {changeSignUp ? (
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.inputF}>
            <TextInput
              style={styles.inputText}
              placeholderTextColor="black"
              placeholder="First Name"
              onChangeText={(name) => setName(name)}
              value={name}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputF2}>
            <TextInput
              style={styles.inputText}
              placeholderTextColor="black"
              placeholder="Email Adress"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputF2}>
            <TextInput
              style={styles.inputText}
              placeholderTextColor="black"
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </TouchableOpacity>

          {/* or sign up with */}
          <View style={styles.orSignUp}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>or sign up with</Text>
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
            <TouchableOpacity onPress={onSignUp} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <SignIn email={email} password={password} isLoading={isLoading} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  socials: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 30,
    marginBottom: 30,
  },

  orSignUp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
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
    top: "-10%",
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
