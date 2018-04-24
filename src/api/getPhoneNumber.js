import { AsyncStorage } from 'react-native';

const getPhoneNumber = async () => {
    const phone = await AsyncStorage.getItem('@phone');
    return phone;
};

export default getPhoneNumber;
