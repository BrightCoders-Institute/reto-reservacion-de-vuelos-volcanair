import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log(user);
      console.log('Inicio de sesión exitoso', user.uid);
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };
  return (
    <View>
    <TextInput
      placeholder="Correo electrónico"
      value={email}
      onChangeText={setEmail}
    />
    <TextInput
      placeholder="Contraseña"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />
    <Button title="Iniciar sesión" onPress={handleLogin} />
    <Button title="Iniciar sesión" onPress={handleLogin} />
  </View>
  );
};

export default LoginScreen;
