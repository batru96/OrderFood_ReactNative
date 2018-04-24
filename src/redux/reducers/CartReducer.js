import saveCart from '../../api/SaveCart';
const CartReducer = (state = [], action) => {
    let newCart = [];
    switch (action.type) {
        case 'CLEAR_CART':
            newCart = [];
            break;
        case 'REPLACE_CART':
            newCart = action.cart;
            break;
        case 'ADD_PRODUCT_TO_CART':
            newCart = [...state, action.product];
            break;
        case 'REMOVE_PRODUCT_FROM_CART':
            newCart = state.filter(item => item.id !== action.id);
            break;
        case 'UPDATE_PRODUCT_NUMBER':
            newCart = state.map(item => {
                if (item.id === action.id) return { ...item, num: action.num };
                return item;
            });
            break;
        default:
            return state;
    }
    saveCart(newCart);
    return newCart;
};

export default CartReducer;
