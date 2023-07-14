import { Rect } from "react-native-safe-area-context"
import { StyleSheet } from "react-native"

export const styleMyFligths = StyleSheet.create({
//Codigos de las ciudaes
  names:{
    flex:1,
    flexDirection: 'row',
    paddingTop:10,
  },
  originCity:{
    flex:1,
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  codeReservation:{
    flex:1,
    color: 'black',
    textAlign:'right',
    fontSize: 17,
    fontWeight: 'bold'
  },
  icon:{
    flex:1,
    top:5,
  },
  //fin de estos datos

  //Nombres
  containetNames:{
    flex:1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    paddingVertical:7,
  },
  lineTransparent:{
    flex:1,
  },
  destinityName:{
    flex:1,
    color:'rgba(0, 0, 0, 0.7)',
    fontSize:12,
    textAlign:'right',
  },
  originName:{
    flex:1,
    color:'rgba(0, 0, 0, 0.7)',
    fontSize:12,
    textAlign:'left',
  },
  //Fin de nombres

  //Fecha y pasageros
  passengers:{
    fontSize:10,
    textAlign:'right',
    color:'black',
    flex:1
  },
  lineaBlack:{
    borderBlockColor:'black',
    flex:1,
  },
  containertLineaBLack:{
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical:10,
  }
  ,
  date:{
    flex:1,
    textAlign:'left',
    left:0,
    fontSize:10,
    color:'black'
  },
  //FIn de estos datos
  ContainerFLatList:{
    paddingTop:20,
    paddingHorizontal:20,
    paddingBottom:20,
  },

})