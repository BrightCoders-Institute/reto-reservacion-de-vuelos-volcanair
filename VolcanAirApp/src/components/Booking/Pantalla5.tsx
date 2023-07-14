import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './Styles';
import Destino from './Destino/Destino';

export default function Pantalla5({ navigation }):JSX.Element {


return (
    <SafeAreaView style={styles.endcontainer}>
        <View style={styles.content}>
        <Destino/>
        
    <Text style={styles.text}>Your Request was received </Text>
    </View>
    <View style={styles.endboton}>
    <TouchableOpacity
    style={styles.boton}
    onPress={() => navigation.navigate('MyFlights')}>
        <Text style={styles.botonText}> Finish</Text>
    </TouchableOpacity>

</View>
</SafeAreaView>
);
};