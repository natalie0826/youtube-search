import { connect } from 'react-redux';

import { fetchVideos, setActiveVideo } from '../actions/videos';
import VideoApp from '../components/VideoApp';

const mapStateToProps = (state) => {
    return {
        videos: state.videos.items,
        video: state.videos.video,
        isFetching : state.videos.isFetching,
        videoTypes: state.videos.videoTypes
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchVideos : (query, videoType) => { console.log(query, videoType); return dispatch(fetchVideos(query, videoType)) },
    setActiveVideo: (id) => dispatch(setActiveVideo(id))
});

export const VideosContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoApp);
