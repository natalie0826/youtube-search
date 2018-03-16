import React from 'react';
import PropTypes from 'prop-types';

import { Search } from '../Search/Search';
import { Selection } from '../Selection/Selection';
import { Loading } from '../Loading/Loading';
import './navigation.css';

export const Navigation = (props) => {
    Navigation.propTypes = {
        searchUpdate: PropTypes.func.isRequired,
        videoTypes: PropTypes.array.isRequired,
        videoTypeChanged: PropTypes.func.isRequired,
        updateSettings: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired
    };

    return (
        <div className="navigation">
            <h2>Welcome to the video app!</h2>
            <Search searchUpdate={props.searchUpdate} />
            <Loading loading={props.isFetching} />
            <Selection title="Video type" items={props.videoTypes} onItemChanged={props.videoTypeChanged} />
            <button className="save" onClick={props.updateSettings}>Update settings</button>
        </div>
    );
}
