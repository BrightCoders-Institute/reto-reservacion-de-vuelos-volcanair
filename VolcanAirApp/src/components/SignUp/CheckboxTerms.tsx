import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

// type checkBoxConfirm = {
//     text: string
// }


export default function CheckboxTerms(): JSX.Element {
    const [agreeTerms, setAgreeTems] = useState(false);

    return (
        <View style={styles.checkBoxContainer}>
            <CheckBox
                disabled={false}
                value={agreeTerms}
                onValueChange={() => setAgreeTems(!agreeTerms)}
                tintColors={{ true: "#5C72E5" }}
            />
            <Text>I agree to the <Text style={styles.underline}>Terms</Text> and <Text style={styles.underline}>Privacy Policy.</Text> <Text style={styles.asteristik}>*</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBoxContainer: {
        marginTop: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    underline: {
        textDecorationLine: 'underline',
    },
    asteristik: {
        color: 'red',
    }

});