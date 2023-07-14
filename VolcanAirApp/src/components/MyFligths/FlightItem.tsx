import { View, Text } from 'react-native'
import React from 'react'
import myFlightsQueries from '../../Queries/MyFligths/myFlightsQueries'
import { styleMyFligths } from './styleMyFligths';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type flightProps={
    flight: Flight;
}

type Flight = {
    date: any;
    destination_city: City;
    origin_city: City;
    no_passengers: number;
} 

type City={
    code: string;
    name: string;
}

const formatDate = (timestamp: any) => {
  const date = timestamp.toDate();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' }); // Obtener el nombre del mes
  const year = date.getFullYear();
  // Formatear la fecha como una cadena escrita
  return `${day} de ${month} de ${year}`;
};

export default function FlightItem({flight}: flightProps): JSX.Element {
  const icon = <FontAwesome5 name={'plane'} color={"#5c6df8"} size={20} style={{textAlign:'center'}}/>; 
   
  return (
    <View  style={styleMyFligths.ContainerFLatList}>
        <View style={styleMyFligths.names}>
          <Text style={styleMyFligths.originCity}>{flight.origin_city.code}</Text>
          <View style={styleMyFligths.icon}>{icon}</View>
          <Text style={styleMyFligths.codeReservation}>{flight.destination_city.code}</Text>
        </View>
        <View style={styleMyFligths.lineTransparent}>
          <View style={styleMyFligths.containetNames}>
            <Text style={styleMyFligths.originName}>{flight.origin_city.name}</Text>
            <Text style={styleMyFligths.destinityName}>{flight.destination_city.name}</Text>
          </View>
        </View>
        <View style={styleMyFligths.lineaBlack}>
          <View style={styleMyFligths.containertLineaBLack}>
            <Text style={styleMyFligths.date}>{formatDate(flight.date)}</Text>
            <Text style={styleMyFligths.passengers}>{flight.no_passengers} passengers</Text>
          </View>
        </View>
  </View>
  )
}