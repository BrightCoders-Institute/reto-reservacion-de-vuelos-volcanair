import { View, Text } from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { Flight } from '../../Schemas/Flight';
import { firebase } from '@react-native-firebase/auth';

export default async function updateFlighs(email: string, dataFlight: Flight) {
  // HACER UNA COPIA PARA MODIFICAR LA COPIA
  dataFlight.date  = firebase.firestore.Timestamp.fromDate(new Date(dataFlight.date));
  // const convertToTimestamp = () => {
  //   const { dateString } = this.state;
  //   const convertedTimestamp = new Date(dateString).getTime();
  //   this.setState({ convertedTimestamp });
  // }
  
  const collectionRef = firestore().collection('users');
  try {
    const querySnapshot = await collectionRef.where('email', '==', email).get();

    if (!querySnapshot.empty) {
      querySnapshot.forEach((documentSnapshot) => {
        const docRef = collectionRef.doc(documentSnapshot.id);

        docRef.update({
          flight_reservations : firestore.FieldValue.arrayUnion(dataFlight)
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
