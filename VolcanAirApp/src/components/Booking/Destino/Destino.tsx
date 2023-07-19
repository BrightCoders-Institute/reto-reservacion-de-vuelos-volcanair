import React from 'react';
import {View, Text} from 'react-native';
import {style} from './style';
import MyIcon from './MyIcon';
import { Flight } from '../../../Schemas/Flight';

type DestinoProps = {
  dataFlight: Flight;
}
const Destino = ({dataFlight}:DestinoProps) => {

  return (
    <View>
      <View>
        <View style={style.names}>
          <Text style={style.originCity}>{dataFlight.origin_city.code}</Text>
          <View style={style.icon}>
            <MyIcon />
          </View>
          <Text style={style.codeReservation}>{dataFlight.destination_city.code}</Text>
        </View>
      </View>
      <View style={style.lineTransparent}>
        <View style={style.containetNames}>
          <Text style={style.originName}>{dataFlight.origin_city.name}</Text>
          <Text style={style.destinityName}>{dataFlight.destination_city.name}</Text>
        </View>
      </View>
      <View style={style.lineaBlack}>
        <View style={style.containertLineaBLack}>
          <Text style={style.date}>{dataFlight.date}</Text>
          <Text style={style.passengers}>{dataFlight.no_passengers} passengers</Text>
        </View>
      </View>
    </View>
  );
};

export default Destino;
