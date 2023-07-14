import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#2196F3',
    borderRadius: 15,
    marginBottom: 30,
    borderWidth: 1,
  },

  botonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'normal',
    textAlign: 'center',
  },

  bookingmain: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
  endcontainer: {
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },

  endboton: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'flex-end',
  },
  maincontainer: {
    width: '100%',
  },
  content: {
    justifyContent: 'flex-start',
    marginTop: '50%',
  },

  tamano: {
    backgroundColor: 'red',
    alignItems: 'center',


  }
});

export default styles;
