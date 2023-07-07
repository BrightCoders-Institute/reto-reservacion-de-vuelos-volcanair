import {GoogleSignin,GoogleSigninButton,statusCodes} from '@react-native-google-signin/google-signin';
import React from 'react';
import { userExist } from '../Queries/RegisterQueries';
GoogleSignin.configure({
  webClientId: '1078898194677-so5crrvvvi39fbng67ts6hgsbf1pp71l.apps.googleusercontent.com',
  offlineAccess: true,
  
});

type propsSignWithGoogle= {
    disable: boolean;
}

export default function SignWithGoogle({disable}: propsSignWithGoogle): JSX.Element {
    // Somewhere in your code
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const {user} = await GoogleSignin.signIn();
            let username = String(user.name);
            await userExist(user.email, username, username, true);
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("Canceled: ",error);
                
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("progress: ",error.code);
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("Not available: ",error.code);
                // play services not available or outdated
            } else {
                console.log("Other: ",error.code);
               
            }
          }};
    return (
        <>
            <GoogleSigninButton
                disabled={disable}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
            //disabled={this.state.isSigninInProgress}
            />
        </>
)
}