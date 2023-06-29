import React from 'react';
import LoginScreen from './src/components/LoginScreen';
import {
  SafeAreaView, View
} from 'react-native';
import SignWithGoogle from './src/components/SignWithGoogle';

function App(): JSX.Element {

  return (
    <View>
        <SafeAreaView >
          <SignWithGoogle/>
          <LoginScreen/>
      </SafeAreaView>
    </View>
  
  );
}


export default App;
