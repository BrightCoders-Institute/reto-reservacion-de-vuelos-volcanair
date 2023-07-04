import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

// type checkBoxConfirm = {
//     text: string
// }


export default function CheckboxSubscribe(): JSX.Element {
    const [agreeTerms, setAgreeTems] = useState(false);

    return (
        <View style={styles.checkBoxContainer}>
            <CheckBox
                disabled={false}
                value={agreeTerms}
                onValueChange={() => setAgreeTems(!agreeTerms)}
                tintColors={{ true: "#5C72E5" }}
            />
            <Text>Subscribe for select product updates</Text>
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
});