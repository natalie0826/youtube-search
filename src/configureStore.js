import thunk from 'redux-thunk';
import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers/index';

const initialState = Immutable.Map({});

export const configureStore = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
