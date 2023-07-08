import React, {useState,useContext} from 'react';
import {View, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationProp } from '@react-navigation/native';
type RootStackParamList = {
  // Define tus nombres de pantalla y sus respectivos parámetros aquí
  MyFlights: undefined;
};

type LoginScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'MyFlights'>;
};


function LoginScreen({ navigation }: LoginScreenProps): JSX.Element {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;  
      navigation.navigate('MyFlights');
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };
  return (
  <View>
    <TextInput placeholder="Correo electrónico" value={email} onChangeText={setEmail}/>
    <TextInput
      placeholder="Contraseña"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />
    <Button title="Iniciar sesión" onPress={handleLogin} />
  </View>
  );
};

export default LoginScreen;
