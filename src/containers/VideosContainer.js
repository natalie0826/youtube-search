import { connect } from 'react-redux';

import {
    loadMoreVideos,
    setActiveVideo,
    fetchVideos
} from '../actions/videos';
import VideoApp from '../components/VideoApp/VideoApp';

const mapStateToProps = state => ({
    videos: state.getIn(['page', 'items']),
    activeVideoId: state.getIn(['page', 'activeVideoId']),
    isFetching: state.getIn(['page', 'isFetching']),
    isLoading: state.getIn(['page', 'isLoading']),
    error: state.getIn(['page', 'error']),
    channelTitle: state.getIn(['channel', 'title'])
});

const mapDispatchToProps = dispatch => ({
    loadMoreVideos: () => dispatch(loadMoreVideos()),
    fetchVideos: () => dispatch(fetchVideos()),
    setActiveVideo: (id) => dispatch(setActiveVideo(id))
});

export const VideosContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(VideoApp);
