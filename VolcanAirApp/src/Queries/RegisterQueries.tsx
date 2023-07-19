import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Dispatch } from 'react';


export const userExist = async (email:string, password:string, nombre:string, signWithGoogle: boolean, navigator: Dispatch) => {
    await firestore()
    .collection('users')
    .where('email', '==', email)
    .get()
    .then(async (querySnapshot) => {
      if(querySnapshot.docs.length>0){
        navigator.navigate("MyFlights");
      }else{
        await registerMailFireBase(email,password, nombre, signWithGoogle);
        Alert.alert("Account Created Succesfully", "Now, you can Sign In with your Google account");
        navigator.navigate("MyFlights");
      }
    })
    .catch(error => {
      console.log('Error al realizar la consulta:', error);     
    });
}


const registerMailFireBase=async (email:string, password:string, nombre:string, signWithGoogle: boolean)=>{
  await auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    register(nombre,email,password, signWithGoogle);
    console.log('Usuario creado!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('El correo ya se esta usando!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('El correo o la contraseña es invalida!');
    }

    console.error(error);
  });
}

const register =(nombre:string, email: string, password:string, signWithGoogle: boolean)=>{    
  firestore().collection('users').add({
    name: nombre,
    email: email,
    password: password,
    signWithGoogle: signWithGoogle
  })
  .then(() => {
    console.log('User added!');
  });
}
