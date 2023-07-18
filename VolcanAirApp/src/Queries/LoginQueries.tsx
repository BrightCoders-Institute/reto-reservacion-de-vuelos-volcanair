import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const isLoggedWithGoogle = async (email: string) => {
    await firestore()
    .collection('users')
    .where('email', '==', email)
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot.docs);
    })
    .catch(error => {
      console.log('Error al realizar la consulta:', error);     
    });
  };