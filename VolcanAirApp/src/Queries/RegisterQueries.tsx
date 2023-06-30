import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const userExist = (email:any, password:any, nombre:any) => {
  firestore()
    .collection('users')
    .where('mail', '==', email)
    .get()
    .then(querySnapshot => {
      if (!querySnapshot.empty) {
        console.log('Este correo ya está registrado');
        
      } else {
        console.log('Este correo no está registrado');
        registerMailFireBase(email,password, nombre);
      }
    })
    .catch(error => {
      console.log('Error al realizar la consulta:', error);     
    });
}


const registerMailFireBase=(email:any, password:any, nombre:any)=>{
  auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('Usuario creado!');
    register(nombre,password);
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
const register =(nombre:any, password:any)=>{    
  firestore().collection('users').add({
    name: nombre,
    password: password,
  })
  .then(() => {
    console.log('User added!');
  });
}
