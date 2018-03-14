const initialState = {
    isFetching: true,
    video: {},
    items: [],
    pageInfo: {},
    videoTypes: ['any', 'episode', 'movie'],
    error: null
};

const videosInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_VIDEOS_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_VIDEOS_SUCCESS':
            console.log('gdfg', action.payload);
            return {
                ...state,
                isFetching: true,
                items: action.payload.videos,
                pageInfo: {
                    perPage : action.payload.perPage,
                    totalCount: action.payload.totalCount,
                    nextPageToken: action.payload.nextPageToken
                }
            };
        case 'FETCH_VIDEOS_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload.error
            };
        case 'SET_ACTIVE_VIDEO':
            return {
                ...state,
                isFetching: false,
                video: state.items.find(item => item.id.videoId === action.payload.id)
            }
        default:
            return state;
    }
};

export const videos = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_VIDEOS_START':
        case 'FETCH_VIDEOS_SUCCESS':
        case 'FETCH_VIDEOS_FAILURE':
        case 'SET_ACTIVE_VIDEO':
            return Object.assign({}, state, videosInfo(state, action));
        default:
            return state;
    }
}