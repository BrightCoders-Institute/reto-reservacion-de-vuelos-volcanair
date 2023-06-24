import { View, Text } from 'react-native'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

import React from 'react'
GoogleSignin.configure({
    webClientId: '1078898194677-so5crrvvvi39fbng67ts6hgsbf1pp71l.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)

});
export default function SignWithGoogle() {
    // Somewhere in your code
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("Canceled: ",error);
                
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("progress: ",error);
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("Not available: ",error);
                // play services not available or outdated
            } else {
                console.log("Other: ",error);
                // some other error happened
            }
        }
    };
    return (
        <>
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
            //disabled={this.state.isSigninInProgress}
            />
        </>
    )
}