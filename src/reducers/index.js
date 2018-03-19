import { combineReducers } from 'redux';

import videos from './videos';
import search from './search';

export const reducers = combineReducers({
    videos,
    search
});
