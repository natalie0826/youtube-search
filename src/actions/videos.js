import { api } from '../tools/ajax-tool';
import { BASE_URL, API, ACTION_TYPES } from '../constants/app';

export const fetchVideos = (searchQuery = '', videoType = 'any', pageToken = '') => {
    return dispatch => {
        dispatch(fetchVideosStart());

        const url =
            `${BASE_URL}?part=snippet&` +
            'maxResults=8&' +
            'type=video&' +
            `videoType=${videoType}&` +
            `key=${API}&` +
            `pageToken=${pageToken}&` +
            `q=${searchQuery}`;

        return api
            .get(url)
            .then(response => {
                if (response.data.items.length) {
                    dispatch(fetchVideosSuccess(response.data));
                } else {
                    dispatch(fetchVideosFailure('no data'));
                }
            })
            .catch(error => dispatch(fetchVideosFailure(error)));
    };
};

export const loadMoreVideos = (pageToken, searchQuery, videoType) => {
    return dispatch => {
        dispatch(fetchVideosStart());

        const url =
            `${BASE_URL}?part=snippet&` +
            'maxResults=8&' +
            'type=video&' +
            `videoType=${videoType}&` +
            `key=${API}&` +
            `pageToken=${pageToken}&` +
            `q=${searchQuery}`;

        return api
            .get(url)
            .then(response => {
                if (response.data.items.length) {
                    dispatch(loadVideosSuccess(response.data));
                } else {
                    dispatch(loadVideosFailure('no data'));
                }
            })
            .catch(error => dispatch(loadVideosFailure(error)));
    }
}

export const fetchVideosStart = () => ({
    type: ACTION_TYPES.FETCH_VIDEOS_START,
});

export const fetchVideosSuccess = data => ({
    type: ACTION_TYPES.FETCH_VIDEOS_SUCCESS,
    payload: {
        videos: data.items,
        perPage: data.pageInfo.resultsPerPage,
        totalCount: data.pageInfo.totalResults,
        nextPageToken: data.nextPageToken,
    },
});

export const fetchVideosFailure = error => ({
    type: ACTION_TYPES.FETCH_VIDEOS_FAILURE,
    payload: {
        error,
    },
});

export const loadVideosSuccess = data => ({
    type: ACTION_TYPES.LOAD_VIDEOS_SUCCESS,
    payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
    },
});

export const loadVideosFailure = error => ({
    type: ACTION_TYPES.LOAD_VIDEOS_FAILURE,
    payload: {
        error,
    }
});

export const setActiveVideo = id => ({
    type: ACTION_TYPES.SET_ACTIVE_VIDEO,
    payload: {
        id,
    },
});

export const setVideoType = videoType => ({
    type: ACTION_TYPES.SET_VIDEO_TYPE,
    payload: {
        videoType,
    }
});

export const updateSearchQuery = searchQuery => ({
    type: ACTION_TYPES.UPDATE_SEARCH_QUERY,
    payload: {
        searchQuery
    }
});
