import { api } from './api';
import { constants } from '../constants/constants';
import { videosActions } from './videosActions';

export const fetchVideos = (search = '', videoType = 'any') => {
    return (dispatch) => {
        dispatch(fetchVideosStart());
        const url = constants.baseUrl +
            `?part=snippet&` +
            `maxResults=8&` +
            `type=video&` +
            `videoType=${videoType}&` +
            `key=${constants.api}&` +
            `q=${search}`;
        console.log(url);
        return api
            .get(url)
            .then((response) => {
                if (response.data.items.length) {
                    dispatch(fetchVideosSuccess(response.data.items));
                    return dispatch(setActiveVideo(response.data.items[0].id.videoId));
                } else {
                    return dispatch(fetchVideosFailure('no data'));
                }
            })
            .catch(error => dispatch(fetchVideosFailure(error)));
    }
};

export const fetchVideosStart = () => ({
    type: videosActions.FETCH_VIDEOS_START
});

export const fetchVideosSuccess = (data) => ({
    type: videosActions.FETCH_VIDEOS_SUCCESS,
    payload: {
        videos: data
    }
});

export const fetchVideosFailure = (error) => ({
    type: videosActions.FETCH_VIDEOS_FAILURE,
    payload: {
        error
    }
});

export const setActiveVideo = (id) => ({
    type: videosActions.SET_ACTIVE_VIDEO,
    payload: {
        id
    }
});
