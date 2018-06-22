import { combineReducers, createStore } from 'redux';
import CartReducer from './reducers/CartReducer';
import isAddressInputReducer from './reducers/isAddressInputVisibleReducer';
import phoneReducer from './reducers/phoneReducer';

const reducer = combineReducers({
    cartArray: CartReducer,
    isInputVisible: isAddressInputReducer,
    phone: phoneReducer,
});

const store = createStore(reducer);

export default store;
