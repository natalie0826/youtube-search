import { ACTION_TYPES, VIDEO_TYPES } from '../constants/app';

const initialState = {
    searchQuery: '',
    activeType: VIDEO_TYPES[0]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.UPDATE_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload.searchQuery
            }
        case ACTION_TYPES.SET_VIDEO_TYPE:
            return {
                ...state,
                activeType: action.payload.videoType
            }
        default:
            return state
    }
}
