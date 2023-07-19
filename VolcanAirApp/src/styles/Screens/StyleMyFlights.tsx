import { StyleSheet } from 'react-native'
import React from 'react'

export const StyleMyFlightsScreen = StyleSheet.create({
    savScreen: {
        flex: 1,
        padding: 2,
        backgroundColor: 'white',
      },
      txtTitleScreen: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5C72E5',
        paddingLeft: 20,
      },
      touchableIcon: {
        display: "flex",
        position: "absolute",
        bottom: 25,
        alignSelf: "center",
      },
      iconAdd: {
        textAlign: 'center',
      }
})

