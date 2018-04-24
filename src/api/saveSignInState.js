import { AsyncStorage } from 'react-native';

const saveSignInState = (isSignIn) => {
    AsyncStorage.setItem('@signin', isSignIn);
}

export default saveSignInState;
