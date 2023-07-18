import { StyleSheet } from 'react-native'
import React from 'react'

export const StyleSignInScreen = StyleSheet.create({
    savScreen: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
      },
      txtTitleScreen: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5C72E5',
        paddingLeft: 10,
      },
      vwFormContainer: {
        marginTop: 40,
      },
      btnContainer: {
        marginTop: 30,
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center'
      },
      btnSignIn: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        width: '90%',
      },
      txtBtnSignIn: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
      },
      txtOr: {
        marginTop: 25,
        fontSize: 16
      }
})

