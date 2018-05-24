import { Record } from 'immutable';

const Channel = Record({
    title: null,
    description: null,
    imageUrl: null,
    isChannelInfoFetching: null,
    error: null
});

export default Channel;
