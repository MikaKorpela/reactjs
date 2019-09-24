import bandReducer from './bandReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    bands: bandReducer
});

export default rootReducer;
