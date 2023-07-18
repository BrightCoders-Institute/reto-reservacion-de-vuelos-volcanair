import React, {useState,useContext, useEffect} from 'react';
import {View, TextInput, Button, SafeAreaView, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationProp } from '@react-navigation/native';
import InputSignUp from '../components/SignUp/InputSignUp';
import { validateEmail, validatePassword } from '../../helpers/inputValidator';
import { StyleSignInScreen as styles } from '../styles/Screens/StyleSignIn';

type RootStackParamList = {
  // Define tus nombres de pantalla y sus respectivos parámetros aquí
  MyFlights: undefined;
};

type LoginScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'MyFlights'>;
};


export default function LoginScreen({ navigation }: LoginScreenProps): JSX.Element {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailInputError, setEmailInputError] = useState('');
  const [passInputError, setPassInputError] = useState('');
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    inputValidator();
  
    return () => {
      
    }
  }, [email, password])

  const inputValidator = ()=>{
    //validatePassword(password, setPassInputError)
    if(validateEmail(email, setEmailInputError)  && validatePassword(password, setPassInputError))
      setBtnDisable(false);
    else
      setBtnDisable(true);
  }
  
  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;  
      console.log(user);
      
      navigation.navigate("MyFlights");
    } catch (error) {
      if(error.code == "auth/wrong-password"){
        Alert.alert("Incrorrect password", "Please verify your password")
      }
      
      if(error.code == "auth/user-not-found"){
        Alert.alert("User not found", "Please verify your email and password")
      }
      
    }
  };
  
  return (
    <SafeAreaView style={styles.savScreen}>
      <Text style={styles.txtTitleScreen}>Login</Text>
      <View style={styles.vwFormContainer}>
      <InputSignUp setValue={setEmail} errorDescription={emailInputError} placeholder='user@domain.com' secureTextEntry={false} label='Email:'/>
      <InputSignUp setValue={setPassword} errorDescription={passInputError} placeholder='password' secureTextEntry={true} label='Password:'/>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btnSignIn, {backgroundColor: (btnDisable)?"#9EA4A9":"#5979F0"}]} disabled={btnDisable} onPress={handleLogin}>
            <Text style={styles.txtBtnSignIn}>Sign In</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

