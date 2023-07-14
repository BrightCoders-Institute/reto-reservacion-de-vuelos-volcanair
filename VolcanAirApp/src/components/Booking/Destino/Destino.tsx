
import React from "react";
import { View, Text } from "react-native";
import { style } from "./style";
import MyIcon from "./MyIcon";


const Destino =()=>{
  return(
    <View >
      <View >
        <View style={style.names}>
          <Text style={style.originCity}>COl</Text>
          <View style={style.icon}><MyIcon/></View>
          <Text style={style.codeReservation}>GDL</Text>
        </View>
      </View>
      <View style={style.lineTransparent}>
        <View style={style.containetNames}>
          <Text style={style.originName}>Colima</Text>
          <Text style={style.destinityName}>Guadalajara</Text>
        </View>
      </View>
      <View style={style.lineaBlack}>
        <View style={style.containertLineaBLack}>
          <Text style={style.date}>11 de julio del 2023</Text>
          <Text style={style.passengers}>5 passengers</Text>
        </View>
      </View>
    </View>
  );
};

export default Destino;