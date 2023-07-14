import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Styles';
import Destino from './Destino/Destino';

export default function Pantalla1({navigation, setCurrentScreen}): JSX.Element {
  return (
    <View style={styles.container}>
      <Destino />

      <Text style={styles.text}>Where are you now?</Text>

      <Text>Selec Location</Text>

      <View>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setCurrentScreen('Screen2')}>
          <Text style={styles.botonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
