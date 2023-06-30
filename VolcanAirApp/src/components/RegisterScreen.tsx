import React, {useState} from 'react';
import { View,TextInput, Button } from 'react-native';
import {userExist} from '../Queries/RegisterQueries';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setName] = useState('');

  const handleButtonPress = () => {
    userExist(email, password,nombre);
  };
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
    <Button title="Iniciar sesión" onPress={handleButtonPress} />
  </View>
  )
}

export default RegisterScreen;
