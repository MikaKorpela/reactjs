const bandReducer = (state = [], action) => {
    
    switch(action.type) {
        case 'CREATE_BAND':
            return Object.assign([...state, action.payload]);
        case 'UPDATE_BAND':
            var bandIndex = [...state].findIndex(({ id }) => id === action.payload.id);
            return Object.assign([...state], {[bandIndex]: action.payload});
        case 'DELETE_BAND':
            return Object.assign([...state].filter(band => band.id !== action.payload.id));
        case 'FETCH_BANDS':
            return action.payload;
        default:
            return state;
    }
}

export default bandReducer;