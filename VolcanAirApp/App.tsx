import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreens from './src/Screens/LoginScreen';
import MyFlights from './src/Screens/MyFlights';
import BookingScreen from './src/Screens/BookingScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import { firebase } from '@react-native-firebase/auth';


import { AuthProvider } from './src/components/AuthContex';

const Stack= createNativeStackNavigator();
function App(): JSX.Element {
  return (
      <AuthProvider>
        <NavigationContainer >
          <Stack.Navigator initialRouteName='SignUp' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LoginScreen' component={LoginScreens} options={{ title: "Signup" }} />
            <Stack.Screen name='MyFlights' component={MyFlights} options={{ title: "My Flights" }} />
            <Stack.Screen name='signup' component={SignUpScreen} options={{ title: "signup" }} />
          </Stack.Navigator>
        </NavigationContainer>   
      </AuthProvider>

  );
}


export default App;
