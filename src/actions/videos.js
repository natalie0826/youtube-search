import { api } from '../tools/ajax-tool';
import { BASE_URL, API, ACTION_TYPES } from '../constants/app';

export const fetchVideos = (search = '', videoType = 'any') => {
    return dispatch => {
        dispatch(fetchVideosStart());

        const url =
            `${BASE_URL}?part=snippet&` +
            'maxResults=8&' +
            'type=video&' +
            `videoType=${videoType}&` +
            `key=${API}&` +
            `q=${search}`;

        console.log(url);

        return api
            .get(url)
            .then(response => {
                if (response.data.items.length) {
                    dispatch(fetchVideosSuccess(response.data.items));
                } else {
                    dispatch(fetchVideosFailure('no data'));
                }
            })
            .catch(error => dispatch(fetchVideosFailure(error)));
    };
};

export const fetchVideosStart = () => ({
    type: ACTION_TYPES.FETCH_VIDEOS_START,
});

export const fetchVideosSuccess = data => ({
    type: ACTION_TYPES.FETCH_VIDEOS_SUCCESS,
    payload: {
        videos: data,
    },
});

export const fetchVideosFailure = error => ({
    type: ACTION_TYPES.FETCH_VIDEOS_FAILURE,
    payload: {
        error,
    },
});

export const setActiveVideo = id => ({
    type: ACTION_TYPES.SET_ACTIVE_VIDEO,
    payload: {
        id,
    },
});
