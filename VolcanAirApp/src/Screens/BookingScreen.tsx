import { View, Text, Button } from 'react-native'
import React from 'react'

export default function BookingScreen({ navigation }):JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BookingScreen</Text>
      <Button title='Go to My Flights' onPress={() => navigation.navigate('MyFlights')} />
    </View>
  )
}