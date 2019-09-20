const bandReducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_BAND':
            state.push(action.payload);
            return state;
        case 'UPDATE_BAND':
            var bands = [...state.bands].filter(band => band.id != action.payload.id);
            bands.push(action.payload);
        default:
            return state;
    }
}

export default bandReducer;