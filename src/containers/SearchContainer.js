import { connect } from 'react-redux';

import {
    fetchVideos,
    setActiveVideo,
    setVideoType,
    updateSearchQuery } from '../actions/videos';
import Navigation from '../components/Navigation/Navigation';

const mapStateToProps = state => ({
    isFetching: state.videos.isFetching,
    pageInfo: state.videos.pageInfo,
    videoTypes: state.search.videoTypes,
    activeType: state.search.activeType,
    searchQuery: state.search.searchQuery,
    perPageValues: state.search.perPageValues,
    perPage: state.search.perPage,
});

const mapDispatchToProps = dispatch => ({
    fetchVideos: (query, videoType, nextPage) => dispatch(fetchVideos(query, videoType, nextPage)),
    setActiveVideo: id => dispatch(setActiveVideo(id)),
    setVideoType: videoType => dispatch(setVideoType(videoType)),
    updateSearchQuery: searchQuery => updateSearchQuery(searchQuery),
});

export const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);
