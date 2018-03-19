import { ACTION_TYPES } from '../constants/app';

const initialState = {
    isFetching: true,
    video: {},
    items: [],
    pageInfo: {},
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_VIDEOS_START:
            return {
                ...state,
                isFetching: true,
            };
        case ACTION_TYPES.FETCH_VIDEOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.payload.videos,
                pageInfo: {
                    perPage: action.payload.perPage,
                    totalCount: action.payload.totalCount,
                    nextPageToken: action.payload.nextPageToken
                },
                video: action.payload.videos[0],
            };
        case ACTION_TYPES.FETCH_VIDEOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error,
            };
        case ACTION_TYPES.SET_ACTIVE_VIDEO:
            return {
                ...state,
                isFetching: false,
                video: state.items.find(item => item.id.videoId === action.payload.id),
            };
        default:
            return state;
    }
};
