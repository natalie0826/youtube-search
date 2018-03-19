import { connect } from 'react-redux';

import { loadMoreVideos } from '../actions/videos';
import VideoApp from '../components/VideoApp/VideoApp';

const mapStateToProps = state => ({
    videos: state.videos.items,
    video: state.videos.video,
    isFetching: state.videos.isFetching,
});

const mapDispatchToProps = dispatch => ({
    loadMoreVideos: (page, searchQ, type) => dispatch(loadMoreVideos(page, searchQ, type)),
});

export const VideosContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(VideoApp);
