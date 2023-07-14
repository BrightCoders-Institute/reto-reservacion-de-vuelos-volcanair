import { View, Text, StyleSheet } from 'react-native'
import React, { useState, Dispatch } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { StyleCheckBoxSubscribe as styles } from '../../styles/Components/SignUp/StyleCheckBoxSubs';


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
