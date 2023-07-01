import {
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';

export default function SignUpScreen({navigation}): JSX.Element {
  const [username, setUSername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTems] = useState(false);

  return (
    <SafeAreaView style={styles.savScreen}>
      <Text style={styles.txtTitleScreen}>Sign Up</Text>
      <View style={styles.vwFormContainer}>
        <Text style={styles.txtLabelInput}>First Name</Text>
        <Input
          style={styles.input}
          placeholder="Your name"
          onChangeText={setUSername}
        />
        <Text style={styles.txtLabelInput}>Email*</Text>
        <Input
          style={styles.input}
          placeholder="user@email.com"
          onChangeText={setEmail}
        />
        <Text style={styles.txtLabelInput}>Password*</Text>
        <Input
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.txtInfoPassword}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>

        <CheckBox
          disabled={false}
          value={agreeTerms}
          onValueChange={() => setAgreeTems(!agreeTerms)}
          tintColors={{true: "#5C72E5"}}
        />
      </View>

      <Button
        title="Go to My Flights"
        onPress={() => navigation.navigate('MyFlights')}
      />
    </SafeAreaView>
  );
}
//536CE6
const styles = StyleSheet.create({
  savScreen: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  txtTitleScreen: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5C72E5',
    paddingLeft: 10,
  },
  vwFormContainer: {
    marginTop: 20,
  },
  txtLabelInput: {
    fontSize: 18,
    paddingLeft: 10,
  },
  input: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#474747',
    width: '110%',
  },
  txtInfoPassword: {
    marginTop: -18,
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
  },
});
