import React from 'react';
import PropTypes from 'prop-types';

import { Search } from '../Search/Search';
import { Selection } from '../Selection/Selection';
import { Loading } from '../Loading/Loading';
import { PageInfo } from '../PageInfo/PageInfo';
import './Navigation.css';

export const Navigation = (props) => {
    Navigation.propTypes = {
        searchUpdate: PropTypes.func.isRequired,
        videoTypes: PropTypes.array.isRequired,
        videoTypeChanged: PropTypes.func.isRequired,
        updateSettings: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        pageInfo: PropTypes.object.isRequired
    };

    return (
        <div className="navigation">
            <div className="search-block">
                <div className="title-separator">Start searching</div>
                <Search searchUpdate={props.searchUpdate} />
                <Loading loading={props.isFetching} />
            </div>
            <div className="settings-block">
                <div className="title-separator">Settings</div>
                <Selection title="Video type" items={props.videoTypes} onItemChanged={props.videoTypeChanged} />
                <button className="save" onClick={props.updateSettings}>Update settings</button>
            </div>
            <div className="page-info-block">
                <div className="title-separator">Page info</div>
                <PageInfo subtitle="Per page" value={props.pageInfo.perPage} />
                <PageInfo subtitle="Total count" value={props.pageInfo.totalCount} />
            </div>
        </div>
    );
}
