const initialState = {
    bands: []
};

const bandReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'CREATE_BAND':
            console.log(`CREATE BAND REDUCER CALLED`);
            return {
                bands: Object.assign([...state.bands, action.payload])
            }
        case 'UPDATE_BAND':
            console.log(`UPDATE BAND REDUCER CALLED`);
            var bandIndex = [...state.bands].findIndex(({ id }) => id === action.payload.id);
            return {
                bands: Object.assign([...state.bands], {[bandIndex]: action.payload})
            }
        case 'DELETE_BAND':
            console.log(`DELETE BAND REDUCER CALLED`);
            return {
                bands: Object.assign([...state.bands].filter(band => band.id !== action.payload.id))
            }
        case 'GET_BANDS':
            console.log(`GET BANDS REDUCER CALLED`);
            return {
                bands: action.payload
            }
        default:
            return state;
    }
}

export default bandReducer;