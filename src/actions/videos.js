import { api } from '../tools/ajax-tool';
import { generateUrl } from '../tools/url-tool';
import { ACTION_TYPES } from '../constants/app';

export const fetchVideos = (searchQuery = '', videoType = 'any', perPage = 16) => {
    return dispatch => {
        dispatch(fetchVideosStart());

        return api
            .get(generateUrl(searchQuery, videoType, perPage))
            .then(response => {
                if (response.data.items.length) {
                    dispatch(fetchVideosSuccess(response.data));
                } else {
                    dispatch(fetchVideosFailure('no data'));
                }
            })
            .catch(error => dispatch(fetchVideosFailure(error.message)));
    };
};

export const loadMoreVideos = (searchQuery, videoType, perPage, pageToken) => {
    return dispatch => {
        dispatch(loadVideosStart());

        return api
            .get(generateUrl(searchQuery, videoType, perPage, pageToken))
            .then(response => {
                if (response.data.items.length) {
                    dispatch(loadVideosSuccess(response.data));
                } else {
                    dispatch(loadVideosFailure('no data'));
                }
            })
            .catch(error => dispatch(loadVideosFailure(error.message)));
    };
};

export const updateSearchQueryAndFetch = (searchQuery, videoType, perPage) => {
    return dispatch => {
        dispatch(updateSearchQuery(searchQuery));

        return dispatch(fetchVideos(searchQuery, videoType, perPage));
    };
};

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

export const loadVideosStart = () => ({
    type: ACTION_TYPES.LOAD_VIDEOS_START,
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

export const updateSettings = (perPage, videoType) => ({
    type: ACTION_TYPES.UPDATE_SETTINGS,
    payload: {
        perPage,
        videoType,
    }
});

export const updateSearchQuery = searchQuery => ({
    type: ACTION_TYPES.UPDATE_SEARCH_QUERY,
    payload: {
        searchQuery,
    }
});
