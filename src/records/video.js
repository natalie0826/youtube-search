import Immutable from 'immutable';

const Video = Immutable.Record({
    id: null,
    title: '',
    channelTitle: '',
    imageUrl:'',
    publishedAt: null
});

export default Video;
