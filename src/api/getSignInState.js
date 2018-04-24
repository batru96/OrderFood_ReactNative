import { AsyncStorage } from 'react-native';

const getSignInState = async () => {
    const isSignIn = await AsyncStorage.getItem('@signin');
    return isSignIn;
}

export default getSignInState;