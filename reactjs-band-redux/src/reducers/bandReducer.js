const bandReducer = (state = [], action) => {
    
    var bands;

    switch(action.type) {
        case 'CREATE_BAND':
            console.log(`CREATE_BAND reducer called`);
            bands = Object.assign(state);
            bands.push(action.payload);
            return bands;
        case 'UPDATE_BAND':
                console.log(`UPDATE_BAND reducer called`);
            bands = [...state].filter(band => band.id !== action.payload.id);
            bands.push(action.payload);
            return bands;
        case 'DELETE_BAND':
                console.log(`DELETE_BAND reducer called`);
            bands = [...state].filter(band => band.id !== action.payload.id);
            return bands;
        case 'FETCH_BANDS':
            console.log(`FETCH_BAND reducer called`);
            bands = action.payload;
            return bands;
        default:
            return state;
    }
}

export default bandReducer;