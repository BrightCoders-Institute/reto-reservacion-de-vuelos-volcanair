import { View, Text, Button } from 'react-native'
import React from 'react'

export default function MyFlights({ navigation }):JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MyFlights</Text>
      <Button title='Go to Booking' onPress={() => navigation.navigate('Booking')} />
    </View>
  )
}