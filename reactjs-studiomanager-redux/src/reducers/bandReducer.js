const bandReducer = (state = {bands: [], band: {}}, action) => {
    console.log("REDUCER");
    switch(action.type) {
        case 'CREATE_BAND':
            state.bands.push(action.payload);
            return state;
        case 'UPDATE_BAND':
            state.bands = [...state.bands].filter(band => band.id !== action.payload.id);
            state.bands.push(action.payload);
            return state;
        case 'DELETE_BAND':
            state.bands = [...state.bands].filter(band => band.id !== action.payload.id);
            return state;
        case 'GET_BAND':
            state.band = [...state.bands].find(band => band.id === action.payload.id);
            return state;
        case 'FETCH_BANDS':
            state.bands = action.payload;
            return state;
        default:
            return state;
    }
}

export default bandReducer;