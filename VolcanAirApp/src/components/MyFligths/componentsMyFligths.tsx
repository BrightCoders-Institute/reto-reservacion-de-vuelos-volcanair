import React, { useContext, useState } from 'react'
import { View, FlatList, Text, Pressable } from 'react-native'
import myFlightsQueries from '../../Queries/MyFligths/myFlightsQueries';
import { AuthContext } from '../AuthContex';
import { styleMyFligths } from './styleMyFligths';

import FlightItem from './FlightItem';


const componentsMyFligths = () => {
  const { user } = useContext(AuthContext);
  const [flightList, setFlightList] = useState([])
  console.log("Email user", user?.email);
  
  const getData = async ()=>{
    await myFlightsQueries(user.email, setFlightList);
    console.log(flightList);
    
    // let data: any[]= myFlightsQueries();
    // console.log(data);  
  }
  const formatDate = (timestamp: any) => {
    const date = timestamp.toDate();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' }); // Obtener el nombre del mes
    const year = date.getFullYear();
    // Formatear la fecha como una cadena escrita
    return `${day} de ${month} de ${year}`;
  };

  const data = [{ flight: "primer vuelo" }, { flight: "segundo vuelo" }]

  return (
    <>
      <FlatList
        data={flightList}
        renderItem={({ item }) => <FlightItem flight={item} />
        }
      />

      <Pressable onPress={getData}>
        <Text>Get Data</Text>
      </Pressable>
    </>
    // <FlatList
    //   data={userData}
    //   keyExtractor={(item) => item.id}
    //   renderItem={itemRender} />

  )
}

export default componentsMyFligths
