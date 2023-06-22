import React from 'react';
import LoginScreen from './src/components/LoginScreen';
import {
  SafeAreaView,
} from 'react-native';


function App(): JSX.Element {

  return (
    <SafeAreaView >
      <LoginScreen/>
    </SafeAreaView>
  );
}


export default App;
