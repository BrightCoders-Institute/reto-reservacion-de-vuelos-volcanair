import React from 'react';
import LoginScreen from './src/components/LoginScreen';
import {
  SafeAreaView,
} from 'react-native';
import SignWithGoogle from './src/components/SignWithGoogle';

function App(): JSX.Element {

  return (
    <SafeAreaView >
      <SignWithGoogle/>
      <LoginScreen/>
    </SafeAreaView>
  );
}


export default App;
