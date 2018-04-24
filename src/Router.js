import React from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Login from './components/Login';
import Menu from './components/Menu';
import Products from './components/Products';
import Drawer from './components/Drawer';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import getSignInState from './api/getSignInState';

const navigationOptions = {
    header: null
};
const width = Dimensions.get('window');

const DrawerSide = DrawerNavigator({
    MENU: {
        screen: Menu
    },
    CART: {
        screen: Cart,
        navigationOptions
    },
    ORDER_HISTORY: {
        screen: OrderHistory,
        navigationOptions
    },
    PRODUCTS: {
        screen: Products,
    },
},
    {
        contentComponent: Drawer
    }
);

export default MainStack = StackNavigator({
    HOME: {
        screen: DrawerSide,
    },
    SIGN_IN: {
        screen: Login,
    },
},
    {
        initialRouteName: 'SIGN_IN',
        headerMode: 'none'
    }
);