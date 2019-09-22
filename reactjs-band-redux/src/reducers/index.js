import bands from './bandReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    bands
});

export default rootReducer;
