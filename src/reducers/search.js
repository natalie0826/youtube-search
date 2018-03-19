import { ACTION_TYPES, VIDEO_TYPES, PER_PAGE_VALUES } from '../constants/app';

const initialState = {
    searchQuery: '',
    videoTypes: VIDEO_TYPES,
    activeType: VIDEO_TYPES[0],
    perPageValues: PER_PAGE_VALUES,
    perPage: PER_PAGE_VALUES[0]
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
        case ACTION_TYPES.SET_PER_PAGE_VALUE:
            return {
                ...state,
                perPage: action.payload.perPage
            }
        default:
            return state
    }
}