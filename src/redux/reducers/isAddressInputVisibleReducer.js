const isAddressInputVisibleReducer = (state = false, action) => {
    if (action.type === 'TOGGLE INPUT') {
        return !state;
    }
    return state;
}

export default isAddressInputVisibleReducer;
