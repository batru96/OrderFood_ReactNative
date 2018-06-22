import savePhone from '../../api/savePhoneNumber';

const phoneReducer = (state = '', action) => {
    if (action.type === 'CHANGE_PHONE') {
        savePhone(action.phone);
        return action.phone;
    }
    return state;
};

export default phoneReducer;
