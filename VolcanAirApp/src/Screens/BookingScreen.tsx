import {View, Text, Button, SafeAreaView} from 'react-native';
import React, {useState,Dispatch} from 'react';
import Pantalla1 from '../components/Booking/Pantalla1';
import Pantalla2 from '../components/Booking/Pantalla2';
import Pantalla3 from '../components/Booking/Pantalla3';
import Pantalla4 from '../components/Booking/Pantalla4';
import Pantalla5 from '../components/Booking/Pantalla5';
import styles from '../components/Booking/Styles';

type BookingScreenProps = {
  navigation: Dispatch<Number>;
}

export default function BookingScreen({navigation}:BookingScreenProps): JSX.Element {
   const [currentScreen, setCurrentScreen] = useState(1);
   const [dataFlight, setDataFlight] = useState({
    "origin_city": {
      "code": "",
      "name": ""
    },
    "destination_city": {
      "code": "",
      "name": ""
    },
    "date":"",
    "no_passengers": 0
   })

   const GetScreen= ()=>{
    switch (currentScreen) {
      case 1: return <Pantalla1 setCurrentScreen={setCurrentScreen} dataFlight={dataFlight} setDataFlight={setDataFlight}/>
        break;
      case 2:  return <Pantalla2 setCurrentScreen={setCurrentScreen} dataFlight={dataFlight} setDataFlight={setDataFlight}/>
        break;
      case 3:  return <Pantalla3 setCurrentScreen={setCurrentScreen} dataFlight={dataFlight} setDataFlight={setDataFlight}/>
        break;
      case 4: return <Pantalla4 setCurrentScreen={setCurrentScreen} dataFlight={dataFlight} setDataFlight={setDataFlight}/>
        break;
      case 5:  return <Pantalla5 navigation={navigation} dataFlight={dataFlight}/>
        break;
    }
   }

  return (
    <SafeAreaView style={styles.bookingmain}>
        <View style={styles.maincontainer}>
          {
            GetScreen()
          }
        </View>
      </SafeAreaView>
      /*{currentScreen === 'Screen1' && (
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
      )}*/
    
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

