import { combineReducers } from 'redux-immutable';

import page from './page';
import search from './search';

export const reducers = combineReducers({
    page,
    search,
});
