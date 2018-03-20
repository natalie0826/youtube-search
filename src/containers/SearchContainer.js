import { connect } from 'react-redux';

import {
    fetchVideos,
    updateSettings,
    updateSearchQueryAndFetch } from '../actions/videos';
import Navigation from '../components/Navigation/Navigation';

const mapStateToProps = state => ({
    pageInfo: state.videos.pageInfo,
    videoTypes: state.search.videoTypes,
    activeType: state.search.activeType,
    searchQuery: state.search.searchQuery,
    perPageValues: state.search.perPageValues,
    perPage: state.search.perPage,
});

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    updateSettings: (perPage, activeType) => dispatch(updateSettings(perPage, activeType)),
    updateSearchQueryAndFetch: (searchQuery, videoType, perPage) => dispatch(updateSearchQueryAndFetch(searchQuery, videoType, perPage)),
});

export const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);
