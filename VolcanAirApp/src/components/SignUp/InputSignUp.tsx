import { View, Text, StyleSheet } from 'react-native';
import React, { Dispatch } from 'react';
import { Input } from 'react-native-elements';
import { StyleInputSignUp as styles } from '../../styles/Components/SignUp/StyleInputSignUp';


type FirstNameInput = {
    setValue: Dispatch,
    errorDescription: string,
    placeholder: string,
    secureTextEntry: boolean,
    label: string
}

export default function InputSignUp({ setValue, errorDescription, placeholder, secureTextEntry, label }: FirstNameInput): JSX.Element {
    return (
        <View>
            <Input
                style={styles.input}
                placeholder={placeholder}
                onChangeText={setValue}
                errorMessage={errorDescription}
                label={label}
                labelStyle={{
                    fontSize: 16,
                    fontFamily: 'arial',
                    fontWeight: 'normal',
                    color: '#040F0F'
                }}
                secureTextEntry= {secureTextEntry}
            />
        </View>
    );
}
