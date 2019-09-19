import bandReducer from './bandReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    band: bandReducer,
});

export default allReducers;
