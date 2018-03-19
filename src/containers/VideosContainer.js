import { connect } from 'react-redux';

import {
    fetchVideos,
    setActiveVideo,
    loadMoreVideos,
    setVideoType,
    updateSearchQuery } from '../actions/videos';
import VideoApp from '../components/VideoApp/VideoApp';

const mapStateToProps = (state) => {
    return {
        videos: state.videos.items,
        video: state.videos.video,
        isFetching : state.videos.isFetching,
        pageInfo: state.videos.pageInfo,
        videoTypes: state.search.videoTypes,
        searchQuery: state.search.searchQuery,
        activeType: state.search.activeType
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchVideos: (query, videoType, nextPage) => dispatch(fetchVideos(query, videoType, nextPage)),
    setActiveVideo: (id) => dispatch(setActiveVideo(id)),
    setVideoType: (videoType) => dispatch(setVideoType(videoType)),
    updateSearchQuery: (searchQuery) => updateSearchQuery(searchQuery),
    loadMoreVideos: (pageToken, searchQuery, videoType) => dispatch(loadMoreVideos(pageToken, searchQuery, videoType))
});

export const VideosContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoApp);
