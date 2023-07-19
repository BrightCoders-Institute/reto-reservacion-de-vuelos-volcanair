import {View, Text, TouchableOpacity} from 'react-native';
import React, { Dispatch } from 'react';
import styles from './Styles';
import Calendario from './Calendario/Calendario';
import Destino from './Destino/Destino';
import { Flight } from '../../Schemas/Flight';

type Screen3Props = {
  setCurrentScreen: Dispatch<number>;
  dataFlight: Flight;
  setDataFlight: Dispatch<Flight>;
}

export default function Pantalla3({setCurrentScreen, dataFlight, setDataFlight}: Screen3Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Destino dataFlight={dataFlight}/>
      <Text style={styles.text}>Selec date</Text>
      <Calendario dataFlight={dataFlight} setDataFlight={setDataFlight}/>
      <View>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setCurrentScreen(4)}>
          <Text style={styles.botonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
