import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreens from './src/Screens/LoginScreen';
import MyFlights from './src/Screens/MyFlights';
import BookingScreen from './src/Screens/BookingScreen';
import { firebase } from '@react-native-firebase/auth';

const Stack= createNativeStackNavigator();
function App(): JSX.Element {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUp'>
        <Stack.Screen name='LoginScreen' component={LoginScreens} options={{title:"Signup"}}/>
        <Stack.Screen name='MyFlights' component={MyFlights} options={{title:"My Flights"}}/>
        <Stack.Screen name='Booking' component={BookingScreen} options={{title:"Boooking"}}/>
      </Stack.Navigator>
    </NavigationContainer>   
  );
}


export default App;
