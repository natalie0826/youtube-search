import { api } from '../tools/ajax-tool';
import { generateUrl } from '../tools/url-tool';
import { ACTION_TYPES } from '../constants/app';

export const fetchVideos = (searchQuery = '', videoType = 'any', perPage = 16) =>
    dispatch => {
        dispatch(fetchVideosStart());

        api
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

export const loadMoreVideos = () =>
    (dispatch, getState) => {
        dispatch(loadVideosStart());

        const stateSearch = getState().get('search');
        const statePage = getState().get('page');

        api
            .get(generateUrl(
                stateSearch.get('searchQuery'),
                stateSearch.get('activeType'),
                stateSearch.get('perPage'),
                statePage.get('pageToken'))
            )
            .then(response => {
                if (response.data.items.length) {
                    dispatch(loadVideosSuccess(response.data));
                } else {
                    dispatch(loadVideosFailure('no data'));
                }
            })
            .catch(error => dispatch(loadVideosFailure(error.message)));
    };

export const updateSearchQueryAndFetch = (searchQuery, videoType, perPage) => 
    dispatch => {
        dispatch(updateSearchQuery(searchQuery));

        dispatch(fetchVideos(searchQuery, videoType, perPage));
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

export const setPerPageValue = (perPage) => ({
    type: ACTION_TYPES.SET_PER_PAGE_VALUE,
    payload: {
        perPage,
    }
});

export const setVideoType = (videoType) => ({
    type: ACTION_TYPES.SET_VIDEO_TYPE,
    payload: {
        videoType,
    }
})

export const updateSearchQuery = searchQuery => ({
    type: ACTION_TYPES.UPDATE_SEARCH_QUERY,
    payload: {
        searchQuery,
    }
});
