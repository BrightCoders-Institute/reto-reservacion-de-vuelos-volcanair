import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import ComponentsMyFligths from '../components/MyFligths/componentsMyFligths';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleMyFlightsScreen as styles } from '../styles/Screens/StyleMyFlights';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



export default function MyFlights({navigation}) {
  const goToBooking= ()=>{
    navigation.navigate("Booking");
  }

  const iconAdd = <FontAwesome5 name={'plus-circle'} color={"#5c6df8"} size={80} style={styles.iconAdd} />;
  return (
    <SafeAreaView style={styles.savScreen}>
      <Text style={styles.txtTitleScreen}>My fligths</Text>
      <ComponentsMyFligths />


      <TouchableOpacity style={styles.touchableIcon} onPress={goToBooking}>
        {iconAdd}
      </TouchableOpacity>

    </SafeAreaView>
  );
}

