import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Menu from '../screens/Menu';
import Products from '../screens/Products';
import Drawer from '../screens/Drawer';
import Cart from '..//screens/Cart';
import OrderHistory from '../screens/OrderHistory';
import Setting from '../screens/Setting';

const navigationOptions = {
    header: null
};

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
    SETTING: { 
        screen: Setting
    }
},
    {
        contentComponent: Drawer
    }
);

const MainStack = StackNavigator({
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

export default MainStack;
