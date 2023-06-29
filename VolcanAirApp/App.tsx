import React from 'react';
import LoginScreen from './src/components/LoginScreen';
import {
  SafeAreaView, View
} from 'react-native';
import SignWithGoogle from './src/components/SignWithGoogle';
import RegisterScreen from './src/components/RegisterScreen';
function App(): JSX.Element {

  return (
    <View>
        <SafeAreaView >
          <RegisterScreen />
      </SafeAreaView>
    </View>
  
  );
}


export default App;
