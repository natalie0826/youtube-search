import { combineReducers } from 'redux';

import videos from './videos';
import pages from './pages';

export const reducers = combineReducers({
    videos,
    pages
});
