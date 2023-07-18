import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  //Codigos de las ciudaes
  names: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  originCity: {
    flex: 1,
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  codeReservation: {
    flex: 1,
    color: 'black',
    textAlign: 'right',
    fontSize: 17,
    fontWeight: 'bold',
  },
  icon: {
    flex: 1,
  },
  //fin de estos datos

  //Nombres
  containetNames: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 7,
  },
  lineTransparent: {
    flex: 0,
  },
  destinityName: {
    flex: 1,
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: 10,
    textAlign: 'right',
  },
  originName: {
    flex: 1,
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: 10,
    textAlign: 'left',
  },
  //Fin de nombres
  //Fecha y pasageros
  passengers: {
    fontSize: 10,
    textAlign: 'right',
    color: 'black',
    flex: 0,
  },
  lineaBlack: {
    borderBlockColor: 'black',
    flex: 0,
  },
  containertLineaBLack: {
    flex: 0,
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  date: {
    flex: 1,
    textAlign: 'left',
    left: 0,
    fontSize: 10,
    color: 'black',
  },
  container: {
    flex: 0,
    justifyContent: 'space-between',
  },
});
