const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            var foo = state + action.payload;
            return foo;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;