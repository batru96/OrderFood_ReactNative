const addressReducer = (state = '', action) => {
    if (action.type === 'CHANGE ADDRESS') {
        return action.address;
    }
    return state;
}

export default addressReducer;
