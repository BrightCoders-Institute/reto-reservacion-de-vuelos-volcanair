import { View, Text, Button } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../components/AuthContex';
import { FlatList } from 'react-native';



export default function MyFlights( navigation:any ) {
  const {user} = useContext(AuthContext);
  const [userData, setUserData] = useState([]);



  useEffect(() => {
    const db = firestore();
    const collectionRef = db.collection('users');

    const unsubscribe = collectionRef.where('mail', '==', user?.email)
      .onSnapshot((querySnapshot) => {
        const data:any = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
          console.log(data)
        });
        setUserData(data);
      });
    return () => {

      unsubscribe(); // Cancelar la suscripción al desmontar
      
    };
  }, []);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>Welcome {user?.name}</Text>
      <FlatList
        data={userData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            {item.flight_reservations.map((reservation, index) => (
              <View key={index}>
             
                <Text style={{ color: 'black' }}>Destination: {reservation.destination_city.name}</Text>
                <Text style={{ color: 'black' }}>Destination code : {reservation.destination_city.code}</Text>
                <Text style={{ color: 'black' }}>Origin: {reservation.origin_city.name}</Text>
                {/* Agregar más campos de la reserva de vuelo según sea necesario */}
              </View>
            ))}
          </View>
        )}
      />
      <Button title='Go to Booking Screen' onPress={() => navigation.navigate('Booking')} />
    </View>
  );
}
