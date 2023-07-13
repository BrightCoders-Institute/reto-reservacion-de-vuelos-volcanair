import React,{useContext} from 'react'
import { View, FlatList, Text } from 'react-native'
import myFlightsQueries from '../../Queries/MyFligths/myFlightsQueries';
import { AuthContext } from '../AuthContex';
import { styleMyFligths } from './styleMyFligths';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const componentsMyFligths = () => {
  const icon = <FontAwesome5 name={'plane'} color={"#5c6df8"} size={20} style={{textAlign:'center'}}/>; 


  const {user} = useContext(AuthContext);
  const userData: any[] = myFlightsQueries();
  
  const formatDate = (timestamp: any) => {
    const date = timestamp.toDate();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' }); // Obtener el nombre del mes
    const year = date.getFullYear();
    // Formatear la fecha como una cadena escrita
    return `${day} de ${month} de ${year}`;
  };
  const itemRender =({ item }) =>{
    return(
      <View  style={styleMyFligths.ContainerFLatList}>
        {item.flight_reservations.map((reservation, index) => (
          <View key={index}>
            <View style={styleMyFligths.names}>
              <Text style={styleMyFligths.originCity}>{reservation.origin_city?.Code}</Text>
              <View style={styleMyFligths.icon}>{icon}</View>
              <Text style={styleMyFligths.codeReservation}>{reservation.destination_city?.code}</Text>
            </View>
            <View style={styleMyFligths.lineTransparent}>
              <View style={styleMyFligths.containetNames}>
                <Text style={styleMyFligths.originName}>{reservation.origin_city?.name}</Text>
                <Text style={styleMyFligths.destinityName}>{reservation.destination_city?.name}</Text>
              </View>
            </View>
            <View style={styleMyFligths.lineaBlack}>
              <View style={styleMyFligths.containertLineaBLack}>
                <Text style={styleMyFligths.date}>{formatDate(reservation.date)}</Text>
                <Text style={styleMyFligths.passengers}>{reservation.no_passengers} passengers</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    )
  }
  return (
    
    <FlatList
      data={userData}
      keyExtractor={(item) => item.id}
      renderItem={itemRender} 
  />
  )
}

export default componentsMyFligths
