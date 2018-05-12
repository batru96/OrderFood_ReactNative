import { AsyncStorage } from 'react-native';

const savePhoneNumber = async (phone) => {
    console.log(phone);
    console.log('-----------------------------');
    const value = await AsyncStorage.setItem('@phone', phone);
    // console.log(value);
    return value;
};

export default savePhoneNumber;
