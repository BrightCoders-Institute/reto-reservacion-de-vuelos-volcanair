import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';


export default function SignUpScreen({ navigation }): JSX.Element {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SignUpScreen</Text>
            <Button title='Go to My Flights' onPress={() => navigation.navigate('MyFlights')} />
        </View>
    )
}