import { connect } from 'react-redux';

import {
    loadMoreVideos,
    setActiveVideo,
    fetchVideos
} from '../actions/videos';
import VideoApp from '../components/VideoApp/VideoApp';

const getState = (dispatch) => new Promise((resolve) => {
    return dispatch((dispatch, getState) => resolve(getState()));
});

const mapStateToProps = state => ({
    videos: state.videos.items,
    activeVideoId: state.videos.activeVideoId,
    isFetching: state.videos.isFetching,
    isLoading: state.videos.isLoading
});

const mapDispatchToProps = dispatch => ({
    loadMoreVideos: () => {
        return getState(dispatch).then(state => {
            dispatch(loadMoreVideos(
                state.search.searchQuery,
                state.search.activeType,
                state.videos.pageInfo.perPage,
                state.videos.pageInfo.nextPageToken));
        });
    },
    fetchVideos: () => dispatch(fetchVideos()),
    setActiveVideo: (id) => dispatch(setActiveVideo(id))
});

export const VideosContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(VideoApp);
