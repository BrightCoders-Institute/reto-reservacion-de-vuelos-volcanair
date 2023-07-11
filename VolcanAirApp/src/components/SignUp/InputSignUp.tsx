import { View, Text, StyleSheet } from 'react-native';
import React, { Dispatch } from 'react';
import { Input } from 'react-native-elements';

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

const styles = StyleSheet.create({
    input: {
        marginTop: 2,
        borderWidth: 0.8,
        borderColor: '#474747',
        width: '110%',
    },
});
