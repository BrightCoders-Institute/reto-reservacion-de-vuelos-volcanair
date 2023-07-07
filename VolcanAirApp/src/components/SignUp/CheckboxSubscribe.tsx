import { View, Text, StyleSheet } from 'react-native'
import React, { useState, Dispatch } from 'react';
import CheckBox from '@react-native-community/checkbox';

type checkBoxSubscription = {
    value: boolean;
    setValue: Dispatch
}



export default function CheckboxSubscribe({value, setValue}: checkBoxSubscription): JSX.Element {

    return (
        <View style={styles.checkBoxContainer}>
            <CheckBox
                disabled={false}
                value={value}
                onValueChange={() => setValue(!value)}
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