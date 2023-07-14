import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './Styles';
import Calendario from './Calendario/Calendario';
import Destino from './Destino/Destino';

export default function Pantalla3({ navigation, setCurrentScreen, }):JSX.Element {
    return (
      <View style={styles.container}>
        <Destino />
        <Text style={styles.text}>Selec date</Text>
        <Calendario />
        <View>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => setCurrentScreen('Screen4')}>
            <Text style={styles.botonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};