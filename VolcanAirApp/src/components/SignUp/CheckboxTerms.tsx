import { View, Text, StyleSheet } from 'react-native'
import React, { useState, Dispatch } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { StyleCheckBoxTerms as styles } from '../../styles/Components/SignUp/StyleCheckBoxTerms';

type checkBoxConfirm = {
    value: boolean;
    setValue: Dispatch
}


export default function CheckboxTerms({value, setValue}: checkBoxConfirm): JSX.Element {
    return (
        <View style={styles.checkBoxContainer}>
            <CheckBox
                disabled={false}
                value={value}
                onValueChange={() => setValue(!value)}
                tintColors={{ true: "#5C72E5" }}
            />
            <Text>I agree to the <Text style={styles.underline}>Terms</Text> and <Text style={styles.underline}>Privacy Policy.</Text> <Text style={styles.asteristik}>*</Text></Text>
        </View>
    )
}
