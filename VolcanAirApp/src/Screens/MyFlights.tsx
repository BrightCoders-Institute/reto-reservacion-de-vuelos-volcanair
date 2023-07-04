import { View, Text, Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';


export default function MyFlights({ navigation }):JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user:any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

 


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:'black'}}>Welcome {user.email}</Text>
      <Button title='Go to Booking Screen' onPress={() => navigation.navigate('Booking')} />
    </View>
  )
}