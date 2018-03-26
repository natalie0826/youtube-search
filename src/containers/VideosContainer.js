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
    videos: state.getIn(['page', 'items']),
    activeVideoId: state.getIn(['page', 'activeVideoId']),
    isFetching: state.getIn(['page', 'isFetching']),
    isLoading: state.getIn(['page', 'isLoading'])
});

const mapDispatchToProps = dispatch => ({
    loadMoreVideos: () => {
        return getState(dispatch).then(state => {
            dispatch(loadMoreVideos(
                state.search.searchQuery,
                state.search.activeType,
                state.page.pageInfo.perPage,
                state.page.pageInfo.nextPageToken));
        });
    },
    fetchVideos: () => dispatch(fetchVideos()),
    setActiveVideo: (id) => dispatch(setActiveVideo(id))
});

export const VideosContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(VideoApp);
