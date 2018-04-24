import { AsyncStorage } from 'react-native';

const getCart = async () => {
    const cartArray = await AsyncStorage.getItem('@cart');
    return cartArray ? JSON.parse(cartArray) : [];
};

export default getCart;
