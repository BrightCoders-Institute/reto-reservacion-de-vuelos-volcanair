import {View, Text, TouchableOpacity} from 'react-native';
import React, { Dispatch } from 'react';
import styles from './Styles';
import Destino from './Destino/Destino';
import { Flight } from '../../Schemas/Flight';

type Screen5Props = {
  dataFlight: Flight;
  navigation: any;
}

export default function Pantalla5({dataFlight, navigation}: Screen5Props): JSX.Element {
  console.log(dataFlight);
  
  return (
    <View style={styles.endcontainer}>
      <View style={styles.content}>
        <Destino />

        <Text style={styles.text}>Your Request was received </Text>
      </View>
      <View style={styles.endboton}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate('MyFlights')}>
          <Text style={styles.botonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
