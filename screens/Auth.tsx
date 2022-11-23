import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 


const Auth = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')

  const onSignUp = () => {  
        console.log('sign up')
  }

  // function that grabs the password and when you click a button shows the password

  const unHidePassword = () => {
    console.log('unhide password')
  }



  return (
    <View style = { styles.container}>
      {/* top text  */}
      <View style = { styles.topTextContainer}>
        <Text style = { styles.topText}>Create an Account</Text>
      </View>

      <View style = { styles.inputContainer}>

      {/* add pill like form data */}

      <TouchableOpacity style = { styles.inputF}>

      <TextInput style = { styles.inputText}
      placeholderTextColor = 'black'
      placeholder = 'First Name' />
        
      </TouchableOpacity>

      <TouchableOpacity style = { styles.inputF2}>

      <TextInput style = { styles.inputText}
      placeholderTextColor = 'black'
      placeholder = 'Email Adress' />
        
      </TouchableOpacity>

      <TouchableOpacity style = { styles.inputF2}>

      <TextInput style = { styles.inputText}
      placeholderTextColor = 'black'
      placeholder = 'Password'
      secureTextEntry = {true}

      />


        
      </TouchableOpacity>

      </View> 

      {/* bottom text  */}
      <TouchableOpacity style = { styles.button }>
        <Text style = { styles.buttonText }>SignUp</Text>
      </TouchableOpacity>


    </View>
  )

}

export default Auth

const styles = StyleSheet.create({
  inputText: {
    color: 'black',
    width: '80%',
  },
  inputF: {
    backgroundColor: 
    '#F5F5DC',
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
    marginTop: 70,
  
  },
  inputF2: {
    backgroundColor: 
    '#F5F5DC',
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
  
  },
  inputContainer: {
    width: '100%',
    height: '75%',
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: 20,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 
    '#F5F5DC',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 70,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  topTextContainer: {
    alignItems: 'center',
    marginTop: 20,
    flex: 1,

  },
  topText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    // fontFamily:
  }

})