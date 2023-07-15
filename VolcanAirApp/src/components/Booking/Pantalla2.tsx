import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Styles';
import Destino from './Destino/Destino';

export default function Pantalla2({navigation, setCurrentScreen}): JSX.Element {
  return (
    <View style={styles.container}>
      <Destino />

      <Text style={styles.text}>Where will you be flying to?</Text>

      <Text> A donde vas</Text>
      <View>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setCurrentScreen('Screen3')}>
          <Text style={styles.botonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
