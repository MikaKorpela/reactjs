import ReduxThunk from 'redux-thunk';
//import { default as ReduxThunk } from 'redux-thunk';
import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const thunk = ReduxThunk.default;

const initialUserState = {
  firstName: '',
  lastName: ''
};

const store = createStore(combineForms({
  user: initialUserState,
}));

export default store;