import { useEffect, useContext, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../components/AuthContex';

type UserData = {
  [key: string]: any; // Tipo genérico para userData
};

const myFlightsQueries = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    const db = firestore();
    const collectionRef = db.collection('users');

    const unsubscribe = collectionRef.where('mail', '==', user?.email).onSnapshot((querySnapshot) => {
      const data: UserData[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
        console.log(data);
      });
      setUserData(data);
    });

    return () => {
      unsubscribe(); // Cancelar la suscripción al desmontar
    };
  }, []);

  return userData;
};

export default myFlightsQueries;
