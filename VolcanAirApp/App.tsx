import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/Screens/SignUpScreen';
import MyFlights from './src/Screens/MyFlights';
import BookingScreen from './src/Screens/BookingScreen';

const Stack= createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUp'>
        <Stack.Screen name='SignUp' component={SignUpScreen} options={{title:"Signup"}}/>
        <Stack.Screen name='MyFlights' component={MyFlights} options={{title:"My Flights"}}/>
        <Stack.Screen name='Booking' component={BookingScreen} options={{title:"Boooking"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
