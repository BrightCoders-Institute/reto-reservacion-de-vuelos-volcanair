import React,{useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {FlatList, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';


export default function myFlightsQueris({ navigation }): JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [information, setInformation] =useState('');
  // Handle user state changes
  function onAuthStateChanged(user:any) {
    setUser(user);
    console.log(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  firestore()
  .collection('Users')
  // Filter results
  .where(user!)
  .get()
  .then(querySnapshot => {
    console.log(querySnapshot)
  });

  return (
  <SafeAreaView>
    
  </SafeAreaView>
  )
}
