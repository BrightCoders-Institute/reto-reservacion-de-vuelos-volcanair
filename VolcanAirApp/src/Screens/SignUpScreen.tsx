import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Alert
} from 'react-native';
import React, { useState, useEffect } from 'react';
import CheckboxTerms from '../components/SignUp/CheckboxTerms';
import CheckboxSubscribe from '../components/SignUp/CheckboxSubscribe';
import InputSignUp from '../components/SignUp/InputSignUp';
import { validateEmail, validatePassword, validateUsername } from '../../helpers/inputValidator';
import { userExist } from '../Queries/RegisterQueries';
import SignWithGoogle from '../components/SignWithGoogle';


export default function SignUpScreen({ navigation }): JSX.Element {
  const [username, setUsername] = useState('');
  const [userInputError, setUserInputError] = useState('');
  const [email, setEmail] = useState('');
  const [emailInputError, setEmailInputError] = useState('');
  const [password, setPassword] = useState('');
  const [passInputError, setPassInputError] = useState('');
  const [agreeTerms, setAgreeTems] = useState(false);
  const [agreeSubscription, setAgreeSubscription] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const [btnGoogleDisabled, setBtnGoogleDisabled] = useState(true);

  const inputValidator = ()=>{
    if(validateUsername(username, setUserInputError) && validateEmail(email, setEmailInputError) && validatePassword(password, setPassInputError) && agreeTerms && agreeSubscription)
      setBtnDisable(false);
    else
      setBtnDisable(true);
  }

  const inputGoogleValidator= ()=>{
    if(agreeTerms && agreeSubscription)
      setBtnGoogleDisabled(false);
    else
      setBtnGoogleDisabled(true);
  }

  useEffect(() => {
    inputValidator();
    inputGoogleValidator();
  
    return () => {
      
    }
  }, [username, email, password,agreeTerms, agreeSubscription])
  

  const handleSignUp = async () => {
    await userExist(email, password, username, false);
  }

  const goToLogin= ()=>{
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.savScreen}>
      <Text style={styles.txtTitleScreen}>Sign Up</Text>
      <View style={styles.vwFormContainer}>
        <InputSignUp setValue={setUsername} errorDescription={userInputError} placeholder='Your name' secureTextEntry={false} label='First name'/>
        <InputSignUp setValue={setEmail} errorDescription={emailInputError} placeholder='username@domain.com' secureTextEntry={false} label='Email*'/>
        <InputSignUp setValue={setPassword} errorDescription={passInputError} placeholder='Password' secureTextEntry={true} label='Password*'/>

        <CheckboxTerms value={agreeTerms} setValue={setAgreeTems}/>
        <CheckboxSubscribe value={agreeSubscription} setValue={setAgreeSubscription}/>

      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btnSignUp, {backgroundColor: (btnDisable)?"#9EA4A9":"#5979F0"}]} onPress={handleSignUp} disabled={btnDisable}>
          <Text style={styles.txtBtnSignUp}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.txtOr}>Or</Text>

        <SignWithGoogle disable={btnGoogleDisabled}/>

        <Text style={styles.txtQuestion}>Already have an account? <Text style={styles.txtLogin} onPress={goToLogin}>Log in</Text></Text>
      </View>
    </SafeAreaView>
  );
}
//536CE6
const styles = StyleSheet.create({
  savScreen: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  txtTitleScreen: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5C72E5',
    paddingLeft: 10,
  },
  vwFormContainer: {
    marginTop: 20,
  },
  txtInfoPassword: {
    marginTop: -18,
    fontSize: 13,
    marginLeft: 10,
    marginRight: 10,
  },
  btnContainer: {
    marginTop: 30,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  },
  btnSignUp: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: '90%',
  },
  txtBtnSignUp: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  txtOr: {
    marginTop: 25,
    fontSize: 16
  },
  txtQuestion:{
    marginTop: 20,
    fontSize: 18
  },
  txtLogin: {
    color: "blue",
    textDecorationLine: 'underline'
  }
});
