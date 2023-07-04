import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import CheckboxTerms from '../components/SignUp/CheckboxTerms';
import CheckboxSubscribe from '../components/SignUp/CheckboxSubscribe';
import InputSignUp from '../components/SignUp/InputSignUp';

export default function SignUpScreen({ navigation }): JSX.Element {
  const [username, setUsername] = useState('');
  const [userInputError, setUserInputError] = useState('');
  const [email, setEmail] = useState('');
  const [emailInputError, setEmailInputError] = useState('');
  const [password, setPassword] = useState('');
  const [passInputError, setPassInputError] = useState('');

  const handleSignUp = () => {
    (username == '') ? setUserInputError("First name is required") : setUserInputError('');
    (email == '') ? setEmailInputError("Email is required") : setEmailInputError('');
    (password == '') ? setPassInputError("Password is required") : setPassInputError('');
  }

  return (
    <SafeAreaView style={styles.savScreen}>
      <Text style={styles.txtTitleScreen}>Sign Up</Text>
      <View style={styles.vwFormContainer}>
        <InputSignUp setValue={setUsername} errorDescription={userInputError} placeholder='Your name' secureTextEntry={false} label='First name'/>
        <InputSignUp setValue={setEmail} errorDescription={emailInputError} placeholder='username@domain.com' secureTextEntry={false} label='Email*'/>
        <InputSignUp setValue={setPassword} errorDescription={passInputError} placeholder='Password' secureTextEntry={true} label='Password*'/>

        <CheckboxTerms />
        <CheckboxSubscribe />

      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnSignUp} onPress={handleSignUp}>
          <Text style={styles.txtBtnSignUp}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.txtOr}>Or</Text>
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
    backgroundColor: '#5979F0',
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
  }
});
