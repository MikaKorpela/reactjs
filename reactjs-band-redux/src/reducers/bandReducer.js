const bandReducer = (state = [], action) => {
    console.log("REDUCER");
    switch(action.type) {
        case 'FETCH_BANDS':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default bandReducer;