import { View, Text } from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
type dataFligths={
  email:string
}
export default async function updateFlighs({email}:dataFligths) {
  const collectionRef = firestore().collection('users');
  try {
    const querySnapshot = await collectionRef.where('email', '==', email).get();

    if (!querySnapshot.empty) {
      querySnapshot.forEach((documentSnapshot) => {
        const docRef = collectionRef.doc(documentSnapshot.id);

        docRef.update({
          origin_city: {
            code: '',
            name: '',
          },
          destination_city: {
            code: '',
            name: '',
          },
          date: '',
          no_passengers: 0,
        });
      });

      console.log('Flight information updated successfully.');
    } else {
      console.log('No user found with the provided email address.');
    }
  } catch (error) {
    console.error('Error updating flight information:', error);
  }
}
