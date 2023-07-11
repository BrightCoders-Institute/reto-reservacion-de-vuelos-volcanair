import React, {useState,useContext, useEffect} from 'react';
import {View, TextInput, Button, SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationProp } from '@react-navigation/native';
import InputSignUp from '../components/SignUp/InputSignUp';
import { validateEmail, validatePassword } from '../../helpers/inputValidator';
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
    if(validateEmail(email, setEmailInputError) && validatePassword(password, setPassInputError))
      setBtnDisable(false);
    else
      setBtnDisable(true);
  }
  
  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;  
      console.log(user);
      
      navigation.navigate('MyFlights');
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };
  return (
    // <View>
    //   <TextInput placeholder="Correo electrónico" value={email} onChangeText={setEmail}/>
    //   <TextInput
    //     placeholder="Contraseña"
    //     secureTextEntry
    //     value={password}
    //     onChangeText={setPassword}
    //   />
    //   <Button title="Iniciar sesión" onPress={handleLogin} />
    // </View>
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

          <Text style={styles.txtOr}>Or</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  savScreen: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  txtTitleScreen: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5C72E5',
    paddingLeft: 10,
  },
  vwFormContainer: {
    marginTop: 40,
  },
  btnContainer: {
    marginTop: 30,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  },
  btnSignIn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: '90%',
  },
  txtBtnSignIn: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  txtOr: {
    marginTop: 25,
    fontSize: 16
  }
})
