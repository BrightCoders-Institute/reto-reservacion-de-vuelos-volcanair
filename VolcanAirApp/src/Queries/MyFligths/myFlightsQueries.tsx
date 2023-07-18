import { useEffect, useContext, useState, Dispatch } from 'react';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../components/AuthContex';

type UserData = {
  [key: string]: any; // Tipo genérico para userData
  
};

const myFlightsQueries = async (email:string, setData: Dispatch) => {
  const db = firestore();
  const collectionRef = db.collection('users');
  const data: UserData[] = [];
  await collectionRef.where('email', '==', email).onSnapshot((querySnapshot) => {
     setData(querySnapshot.docs[0]._data.flight_reservations);
    // console.log(querySnapshot.docs[0]._data.flight_reservations);

  });
  
};

export default myFlightsQueries;
