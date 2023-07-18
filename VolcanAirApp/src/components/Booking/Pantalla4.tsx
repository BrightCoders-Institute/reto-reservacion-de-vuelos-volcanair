import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import Destino from './Destino/Destino';
import {PassengersSelector} from './Pasajeros/PassengersSelector';

export default function Pantalla4({setCurrentScreen}): JSX.Element {
  return (
    <View style={styles.container}>
      <Destino />
      <Text style={styles.text}>How many passengers?</Text>
      <View>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'gray'}}></View>

        <PassengersSelector />
      </View>
      <View>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setCurrentScreen('Screen5')}>
          <Text style={styles.botonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
