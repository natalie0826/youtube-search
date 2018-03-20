import { ACTION_TYPES } from '../constants/app';

const initialState = {
    isFetching: true,
    isLoading: false,
    activeVideoId: '',
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
                activeVideoId: action.payload.videos[0].id.videoId,
            };
        case ACTION_TYPES.FETCH_VIDEOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload.error,
            };
        case ACTION_TYPES.LOAD_VIDEOS_START:
            return {
                ...state,
                isLoading: true,
            };
        case ACTION_TYPES.LOAD_VIDEOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: state.items.concat(action.payload.videos),
                pageInfo: {
                    ...state.pageInfo,
                    nextPageToken: action.payload.nextPageToken
                },
            };
        case ACTION_TYPES.LOAD_VIDEOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        case ACTION_TYPES.SET_ACTIVE_VIDEO:
            return {
                ...state,
                isFetching: false,
                activeVideoId: action.payload.id,
            };
        default:
            return state;
    }
};
