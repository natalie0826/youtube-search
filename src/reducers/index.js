import { combineReducers } from 'redux-immutable';

import page from './page';
import search from './search';
import channel from './channel';

export const reducers = combineReducers({
    page,
    search,
    channel,
});
