import { connect } from 'react-redux';

import {
    setPerPageValue,
    setVideoType,
    updateSearchQueryAndFetch
} from '../actions/videos';
import { Navigation } from '../components/Navigation/Navigation';

const mapStateToProps = state => ({
    totalCount: state.getIn(['page', 'totalCount']),
    activeType: state.getIn(['search', 'activeType']),
    searchQuery: state.getIn(['search', 'searchQuery']),
    perPage: state.getIn(['search', 'perPage']),
});

const mapDispatchToProps = dispatch => ({
    setPerPageValue: perPage => dispatch(setPerPageValue(perPage)),
    setVideoType: videoType => dispatch(setVideoType(videoType)),
    updateSearchQueryAndFetch: (searchQuery, videoType, perPage) => dispatch(updateSearchQueryAndFetch(searchQuery, videoType, perPage)),
});

export const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Navigation);
