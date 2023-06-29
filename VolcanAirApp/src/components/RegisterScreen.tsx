import React, {useState} from 'react';
import { View,TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setName] = useState('');

  const userExist = () => {
  firestore()
    .collection('users')
    .where('mail', '==', email)
    .get()
    .then(querySnapshot => {
      if (!querySnapshot.empty) {
        console.log('Este correo ya está registrado');
        
      } else {
        console.log('Este correo no está registrado');
        registerMailFireBase();
      }
    })
    .catch(error => {
      console.log('Error al realizar la consulta:', error);
      
    });
}

  const registerMailFireBase=()=>{
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Usuario creado');
      register();
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('El correo ya se esta usando!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('El correo o la contraseña es invalida!');
      }

      console.error(error);
    });
  }

  const register =()=>{    
    firestore().collection('users').add({
      name: nombre,
      password: password,
    })
    .then(() => {
      console.log('User added!');
    });
  }
  
  return (
    <View>
      <TextInput
      placeholder="First Name"
      value={nombre}
      onChangeText={setName}
    />
    <TextInput
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
    />
    <TextInput
      placeholder="Password"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />
    <Button title="Iniciar sesión" onPress={userExist} />
  </View>
  )
}

export default RegisterScreen
