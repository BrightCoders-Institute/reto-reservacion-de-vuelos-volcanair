import { View ,Button, Text} from 'react-native';
import React from 'react';
import ComponentsMyFligths from '../components/MyFligths/componentsMyFligths';


export default function MyFlights( navigation:any ) {
  return (
    <View>
      <Text style={{color:"#5c6df8", fontSize:25, fontWeight: 'bold', left:15, top:10}}>My fligths</Text>
      <ComponentsMyFligths/>
     
    </View>
  );
}
 