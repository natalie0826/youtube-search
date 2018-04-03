import { api } from '../tools/ajax-tool';
import { generateVideoUrl } from '../tools/url-video-tool';
import { generateChannelUrl } from '../tools/url-channel-tool';
import { ACTION_TYPES } from '../constants/app';

export const fetchVideos = (searchQuery = '', videoType = 'any', perPage = 16) =>
    (dispatch, getState) => {
        dispatch(fetchVideosStart());

        const channelId = getState().get('search').get('channelId');
        const pageToken = null;

        const url = generateVideoUrl(searchQuery, videoType, perPage, pageToken, channelId);

        api
            .get(url)
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
        const url = generateVideoUrl(
            stateSearch.get('searchQuery'),
            stateSearch.get('activeType'),
            stateSearch.get('perPage'),
            statePage.get('nextPageToken'));

        api
            .get(url)
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

export const fetchChannelInfo = (channelId) =>
    dispatch => {
        dispatch(fetchChannelInfoStart());

        const url = generateChannelUrl(channelId);

        api
            .get(url)
            .then(response => {
                if(response.data.items.length) {
                    dispatch(fetchChannelInfoSuccess(response.data.items[0]));
                } else {
                    dispatch(fetchChannelInfoFailure('no data'));
                }
            })
            .catch(error => dispatch(fetchChannelInfoFailure(error.message)));
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

export const loadVideosFailure = (error) => ({
    type: ACTION_TYPES.LOAD_VIDEOS_FAILURE,
    payload: {
        error,
    }
});

export const fetchChannelInfoStart = () => ({
    type: ACTION_TYPES.FETCH_CHANNEL_INFO_START,
});

export const fetchChannelInfoSuccess = (channelInfo) => ({
    type: ACTION_TYPES.FETCH_CHANNEL_INFO_SUCCESS,
    payload: {
        channelInfo
    }
});

export const fetchChannelInfoFailure = (error) => ({
    type: ACTION_TYPES.FETCH_CHANNEL_INFO_FAILURE,
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
});

export const setChannelId = (channelId) => ({
    type: ACTION_TYPES.SET_CHANNEL_ID,
    payload: {
        channelId,
    }
});

export const updateSearchQuery = searchQuery => ({
    type: ACTION_TYPES.UPDATE_SEARCH_QUERY,
    payload: {
        searchQuery,
    }
});
