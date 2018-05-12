import { AsyncStorage } from 'react-native';

const removePhone = async () => await AsyncStorage.removeItem('@phone');

export default removePhone;
