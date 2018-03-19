import React from 'react';
import PropTypes from 'prop-types';

import { Search } from '../Search/Search';
import { Selection } from '../Selection/Selection';
import { Loading } from '../Loading/Loading';
import { PageInfo } from '../PageInfo/PageInfo';
import './Navigation.css';

export default class Navigation extends React.Component {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        pageInfo: PropTypes.object.isRequired,
        videoTypes: PropTypes.array.isRequired,
        activeType: PropTypes.string.isRequired,
        searchQuery: PropTypes.string.isRequired,
        perPageValues: PropTypes.array.isRequired,
        perPage: PropTypes.number.isRequired,
        fetchVideos: PropTypes.func.isRequired,
        setActiveVideo: PropTypes.func.isRequired,
        setVideoType: PropTypes.func.isRequired,
        updateSearchQuery: PropTypes.func.isRequired,

        // updateSettings: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const {
            isFetching,
            pageInfo,
            videoTypes,
            activeType,
            searchQuery,
            perPageValues,
            perPage,
            fetchVideos,
            setActiveVideo,
            setVideoType,
            updateSearchQuery,
        } = this.props;

        return (
            <section className="navigation">
                <div className="search-block">
                    <div className="title-separator">Start searching</div>
                    <Search value={searchQuery} searchUpdate={(event) => updateSearchQuery(event.target.value)} />
                    <Loading loading={isFetching} />
                </div>
                <div className="settings-block">
                    <div className="title-separator">Settings</div>
                    <Selection title="Video type" items={videoTypes} active={activeType} onItemChanged={event => setVideoType(event.target.value)} />
                    {/* <Selection title="Per page" items={perPageValues} active={perPage} onItemChanged={props.videoTypeChanged} /> */}
                    <button className="save" onClick={fetchVideos}>Update settings</button>
                </div>
                <div className="page-info-block">
                    <div className="title-separator">Page info</div>
                    <div className="info">
                        <PageInfo subtitle="Per page" value={pageInfo.perPage} />
                        <PageInfo subtitle="Total count" value={pageInfo.totalCount} />
                    </div>
                </div>
            </section>
        );
    }
}
