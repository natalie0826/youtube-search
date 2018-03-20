import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers/index';

export const configureStore = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);
