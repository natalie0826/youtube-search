import { ACTION_TYPES, VIDEO_TYPES, PER_PAGE_VALUES } from '../constants/app';
import Search from '../records/search';

const initialState = new Search({
    searchQuery: '',
    channelId: '',
    activeType: VIDEO_TYPES[0],
    perPage: PER_PAGE_VALUES[0]
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_SEARCH_QUERY:
            return state.set('searchQuery', action.payload.searchQuery);
        
        case ACTION_TYPES.SET_VIDEO_TYPE:
            return state.set('activeType', action.payload.videoType);
        
        case ACTION_TYPES.SET_PER_PAGE_VALUE:
            return state.set('perPage', action.payload.perPage);

        case ACTION_TYPES.SET_CHANNEL_ID:
            return state.set('channelId', action.payload.channelId);
            
        default:
            return state;
    }
};
