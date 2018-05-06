import {
    createStore,
    applyMiddleware
} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root_reducer';

export default (preloadedState = {}) => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
);