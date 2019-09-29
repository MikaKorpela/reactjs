import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer,
    applyMiddleware(promise, thunk, logger)
);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
