import counterReducer from './counter';
import {combineReducers} from 'redux';
import duckReducer from './duck';

const allReducers = combineReducers({
    counter: counterReducer,
    duck: duckReducer
});

export default allReducers;
