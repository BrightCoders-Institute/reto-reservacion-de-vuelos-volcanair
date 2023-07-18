import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState,Dispatch} from 'react';
import styles from './Styles';
import Destino from './Destino/Destino';
import {PassengersSelector} from './Pasajeros/PassengersSelector';
import { Flight } from '../../Schemas/Flight';

type Screen4Props = {
  setCurrentScreen: Dispatch<number>;
  dataFlight: Flight;
  setDataFlight: Dispatch<Flight>;
}
export default function Pantalla4({setCurrentScreen, dataFlight, setDataFlight}:Screen4Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Destino />
      <Text style={styles.text}>How many passengers?</Text>
      <View>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'gray'}}></View>

        <PassengersSelector dataFlight={dataFlight} setDataFlight={setDataFlight}/>
      </View>
      <View>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setCurrentScreen(5)}>
          <Text style={styles.botonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
