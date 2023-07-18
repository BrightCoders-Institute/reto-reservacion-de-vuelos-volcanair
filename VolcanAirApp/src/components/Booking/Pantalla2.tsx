import {View, Text, TouchableOpacity} from 'react-native';
import React, { Dispatch,SetStateAction } from 'react';
import styles from './Styles';
import Destino from './Destino/Destino';
import { Flight } from '../../Schemas/Flight';
import SelectDropDown from 'react-native-select-dropdown';

type Screen2Props = {
  setCurrentScreen: Dispatch<SetStateAction<number>>;
  dataFlight: Flight;
  setDataFlight: Dispatch<Flight>;
};

// Screen2Props
export default function Pantalla2({setCurrentScreen, dataFlight, setDataFlight}: Screen2Props): JSX.Element {
  console.log(JSON.stringify(dataFlight));
  const countries = ["Colima", "Guadalajara", "Torreon", "CDMX"];
  return (
    <View style={styles.container}>
      <Destino />

      <Text style={styles.text}>Where will you be flying to?</Text>

      
      <SelectDropDown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem);
          setDataFlight({
            ...dataFlight,
            destination_city: {
              name: selectedItem,
              code: "CODE"
            }
          })
        }}
      />
      
      <View>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setCurrentScreen(3)}>
          <Text style={styles.botonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
