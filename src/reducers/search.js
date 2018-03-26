import { ACTION_TYPES } from '../constants/app';
import Search from '../records/search';

const initialState = new Search();

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_SEARCH_QUERY:
            return state.set('searchQuery', action.payload.searchQuery);
        
        case ACTION_TYPES.SET_VIDEO_TYPE:
            return state.set('activeType', action.payload.videoType);
        
        case ACTION_TYPES.SET_PER_PAGE_VALUE:
            return state.set('perPage', action.payload.perPage);
            
        default:
            return state;
    }
};
