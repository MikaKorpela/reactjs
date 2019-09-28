//const initialState = [];

const initialState = {bands: [], band: {}};

const bandReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'GET_BAND':
            return {
                bands: Object.assign([...state.bands]),
                band: Object.assign([...state.bands].filter(band => band.id === action.payload))[0]
            }
        case 'CREATE_BAND':
            console.log([...state.bands]);
            return {
                bands: Object.assign([...state.bands, action.payload]),
                band: {}
            }
        case 'UPDATE_BAND':
            var bandIndex = [...state.bands].findIndex(({ id }) => id === action.payload.id);
            return {
                bands: Object.assign([...state.bands], {[bandIndex]: action.payload}),
                band: {}
            }
        case 'DELETE_BAND':
            return {
                bands: Object.assign([...state.bands].filter(band => band.id !== action.payload.id)),
                band: {}
            }
        case 'FETCH_BANDS':
            console.log(`FETCH REDUCER CALLED`);
            console.log(`PAYLOAD: ${action.payload}`);
            return {
                bands: action.payload,
                band: {}
            }
        default:
            return state;
    }
}

export default bandReducer;