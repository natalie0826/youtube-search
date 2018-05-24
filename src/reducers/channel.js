import { ACTION_TYPES } from '../constants/app';
import Channel from '../records/channel';

const initialState = new Channel({
    title: '',
    description: '',
    imageUrl: '',
    isChannelInfoFetching: false,
    error: ''
});

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_CHANNEL_INFO_START:
            return state.set('isChannelInfoFetching', true);
        
        case ACTION_TYPES.FETCH_CHANNEL_INFO_SUCCESS:
            return state.merge({
                title: action.payload.channelInfo.snippet.title,
                description: action.payload.channelInfo.snippet.description,
                imageUrl: action.payload.channelInfo.snippet.thumbnails.high.url,
                isChannelInfoFetching: false
            });
        
        case ACTION_TYPES.FETCH_CHANNEL_INFO_FAILURE:
            return state.set('error', action.payload.error);
            
        default:
            return state;
    }
};
