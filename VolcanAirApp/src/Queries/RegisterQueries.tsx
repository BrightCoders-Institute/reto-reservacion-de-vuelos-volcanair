import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const userExist = async (email:string, password:string, nombre:string) => {
   let userData = await firestore()
    .collection('users')
    .where('email', '==', email)
    .get()
    .then(querySnapshot => {
      console.log(querySnapshot.docs);
      
      if(querySnapshot.docs.length>0){
          console.log('Este correo ya está registrado');
          return true;
      }else{
          return false;
      }
    })
    .catch(error => {
      console.log('Error al realizar la consulta:', error);     
    });

    console.log(userData);
    
    if(userData){
      return true;
    }
    else{
      await registerMailFireBase(email,password, nombre);
      return false;
    }
    // if (JSON.parse(userData)>0) {
    //   console.log('Este correo ya está registrado');
    //   return querySnapshot.docs;
    // } else {
    //   console.log('Este correo no está registrado');
    //   
    //   return querySnapshot.docs;
    // }
}


const registerMailFireBase=async (email:string, password:string, nombre:string)=>{
  await auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    register(nombre,email,password);
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

const register =(nombre:string, email: string, password:string)=>{    
  firestore().collection('users').add({
    name: nombre,
    email: email,
    password: password,
  })
  .then(() => {
    console.log('User added!');
  });
}
