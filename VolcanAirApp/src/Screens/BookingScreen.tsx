import {View, Text, Button, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Pantalla1 from '../components/Booking/Pantalla1';
import Pantalla2 from '../components/Booking/Pantalla2';
import Pantalla3 from '../components/Booking/Pantalla3';
import Pantalla4 from '../components/Booking/Pantalla4';
import Pantalla5 from '../components/Booking/Pantalla5';
import styles from '../components/Booking/Styles';

export default function BookingScreen({navigation}): JSX.Element {
  const [currentScreen, setCurrentScreen] = useState('Screen1');

  return (
    <SafeAreaView style={styles.bookingmain}>
      {currentScreen === 'Screen1' && (
        <Screen1 navigation={navigation} setCurrentScreen={setCurrentScreen} />
      )}
      {currentScreen === 'Screen2' && (
        <Screen2 navigation={navigation} setCurrentScreen={setCurrentScreen} />
      )}
      {currentScreen === 'Screen3' && (
        <Screen3 navigation={navigation} setCurrentScreen={setCurrentScreen} />
      )}
      {currentScreen === 'Screen4' && (
        <Screen4 navigation={navigation} setCurrentScreen={setCurrentScreen} />
      )}
      {currentScreen === 'Screen5' && (
        <Screen5 navigation={navigation} setCurrentScreen={setCurrentScreen} />
      )}
    </SafeAreaView>
  );
}

function Screen1({setCurrentScreen, navigation}) {
  return (
    <View style={styles.maincontainer}>
      <Pantalla1 setCurrentScreen={setCurrentScreen} navigation={navigation} />
    </View>
  );
}

function Screen2({setCurrentScreen, navigation}) {
  return (
    <View style={styles.maincontainer}>
      <Pantalla2 setCurrentScreen={setCurrentScreen} navigation={navigation} />
    </View>
  );
}

function Screen3({setCurrentScreen, navigation}) {
  return (
    <View style={styles.maincontainer}>
      <Pantalla3 setCurrentScreen={setCurrentScreen} navigation={navigation} />
    </View>
  );
}
function Screen4({setCurrentScreen, navigation}) {
  return (
    <View style={styles.maincontainer}>
      <Pantalla4 setCurrentScreen={setCurrentScreen} navigation={navigation} />
    </View>
  );
}

function Screen5({setCurrentScreen, navigation}) {
  return (
    <View style={styles.maincontainer}>
      <Pantalla5 navigation={navigation} />
    </View>
  );
}

