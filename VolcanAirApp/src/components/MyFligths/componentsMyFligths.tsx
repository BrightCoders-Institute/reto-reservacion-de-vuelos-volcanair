import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import myFlightsQueries from '../../Queries/MyFligths/myFlightsQueries';
import { AuthContext } from '../AuthContex';
import FlightItem from './FlightItem';
import { StyleFlightList as styles } from '../../styles/Components/MyFlights/FlightList';




const componentsMyFligths = () => {
  const { user } = useContext(AuthContext);
  const [flightList, setFlightList] = useState([])
  console.log("Email user", user?.email);

  useEffect(() => {
    myFlightsQueries(user?.email, setFlightList);
  }, [])

  
  return (
    <View style={ styles.flistFlights}>
      <FlatList
        data={flightList}
        renderItem={({ item }) => <FlightItem flight={item} />}
      />
    </View>
  )
}

export default componentsMyFligths
