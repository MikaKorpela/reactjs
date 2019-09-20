const duckReducer = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_DUCK':
            var ducks = state.push(action.payload);
            return ducks;
        case 'UPDATE_DUCK':
            var ducks = [...state].filter(duck => duck.id !== action.payload.id);
            ducks.push(action.payload);
            return ducks;
        case 'DELETE_DUCK':
            var ducks = [...state].filter(duck => duck.id !== action.payload.id);
            return ducks;
        default:
            return state;
    }
}

export default duckReducer;