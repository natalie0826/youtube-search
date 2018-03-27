import { List } from 'immutable'

import { ACTION_TYPES } from '../constants/app';
import { getDate } from '../tools/date-tool';
import Page from '../records/page';
import Video from '../records/video';

const initialState = new Page({
    isFetching: true,
    isLoading: false,
    totalCount: 0,
    nextPageToken: '',
    activeVideoId: '',
    items: List(Video),
    error: null,
});

const getFormatVideos = newVideos => {
    return newVideos.map(video => {
        const videoInfo = video.snippet;

        return new Video({
            id: video.id.videoId,
            title: videoInfo.title,
            channelTitle: videoInfo.channelTitle,
            imageUrl: videoInfo.thumbnails.high.url,
            publishedAt: getDate(videoInfo.publishedAt)
        }); 
    })
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_VIDEOS_START:
            return state.set('isFetching', true);

        case ACTION_TYPES.FETCH_VIDEOS_SUCCESS:
            return state.merge({
                isFetching: false,
                items: getFormatVideos(action.payload.videos),
                totalCount: action.payload.totalCount,
                nextPageToken: action.payload.nextPageToken,
                activeVideoId: action.payload.videos[0].id.videoId,
            });

        case ACTION_TYPES.FETCH_VIDEOS_FAILURE:
            return state.merge({
                isFetching: false,
                error: action.payload.error,
            });

        case ACTION_TYPES.LOAD_VIDEOS_START:
            return state.set('isLoading', true);

        case ACTION_TYPES.LOAD_VIDEOS_SUCCESS:
            return state.merge({
                isLoading: false,
                items: state.items.concat(getFormatVideos(action.payload.videos)),
                nextPageToken: action.payload.nextPageToken,
            });

        case ACTION_TYPES.LOAD_VIDEOS_FAILURE:
            return state.merge({
                isLoading: false,
                error: action.payload.error,
            });

        case ACTION_TYPES.SET_ACTIVE_VIDEO:
            return state.merge({
                isFetching: false,
                activeVideoId: action.payload.id,
            });

        default:
            return state;
    }
};
