import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import NumberDropDown from './Pasajeros/NumberDropDown';
import Destino from './Destino/Destino';

export default function Pantalla4({navigation, setCurrentScreen}): JSX.Element {
  return (
    <View style={styles.container}>
      <Destino />
      <Text style={styles.text}>How many passengers?</Text>
      <View style={styles.tamano}>
      
      <NumberDropDown />
      </View>
      <View >
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setCurrentScreen('Screen5')}>
          <Text style={styles.botonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
