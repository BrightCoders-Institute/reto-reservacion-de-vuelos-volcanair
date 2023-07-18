import { View, Text, TouchableOpacity } from 'react-native';
import React, { Dispatch } from 'react';
import styles from './Styles';
import Destino from './Destino/Destino';
import { Flight } from '../../Schemas/Flight';
import SelectDropDown from 'react-native-select-dropdown';

type Screen1Props = {
  setCurrentScreen: Dispatch<number>;
  dataFlight: Flight;
  setDataFlight: Dispatch<Flight>;
}

export default function Pantalla1({ setCurrentScreen, setDataFlight, dataFlight }: Screen1Props): JSX.Element {
  const countries = ["Colima", "Guadalajara", "Torreon", "CDMX"];
  return (
    <View style={styles.container}>
      <Destino />

      <Text style={styles.text}>Where are you now?</Text>

      <SelectDropDown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem);
          setDataFlight({
            ...dataFlight,
            origin_city: {
              name: selectedItem,
              code: "CODE"
            }
          })
        }}
      />


      <View>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setCurrentScreen(2)}>
          <Text style={styles.botonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
