import { AsyncStorage } from 'react-native';

const savePhoneNumber = async (phone) => {
    await AsyncStorage.setItem('@phone', phone);
};

export default savePhoneNumber;
