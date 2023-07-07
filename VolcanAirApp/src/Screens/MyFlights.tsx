import { View, Text, Button, StyleSheet} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../components/AuthContex';
import { FlatList } from 'react-native';
import myFlightsQueries from '../Queries/MyFligths/myFlightsQueries';


export default function MyFlights( navigation:any ) {
  const {user} = useContext(AuthContext);
  const userData: any[] = myFlightsQueries();
  const icon = <FontAwesome5 name={'plane'} />; 
  
  const formatDate = (timestamp: any) => {
    const date = timestamp.toDate(); // Convertir el objeto Timestamp a una fecha
    return date.toISOString(); // Formatear la fecha como una cadena legible
  };

  return (
    <View>
      <FlatList
        data={userData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View >
            {item.flight_reservations.map((reservation, index) => (
              <View key={index} >
                <Text style={{ color: 'black' }}>{reservation.destination_city?.code}</Text>
                <Text style={{ color: 'black' }}>Destination: {reservation.destination_city?.name}</Text>
                <Text style={{ color: 'black' }}>Origin: {reservation.origin_city?.name}</Text>
                <Text style={{ color: 'black' }}>Origin code: {reservation.origin_city?.Code}</Text>
                <Text style={{ color: 'black' }}>Date: {formatDate(reservation.date)}</Text>
                <Text style={{ color: 'black' }}>Passengers: {reservation.no_passengers}</Text>
              </View>
            ))}
          </View>
        )}
      />
      <Button title='Go to Booking Screen' onPress={() => navigation.navigate('Booking')} />
    </View>
  );

  const style = StyleSheet.create({
    Flight:{
    },
    CodeDestination:{

    }
  })
}
 