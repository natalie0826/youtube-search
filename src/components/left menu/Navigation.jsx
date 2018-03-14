import React from 'react';
import PropTypes from 'prop-types';

import { Search } from './Search';
import { Selection } from './Selection';
import '../../styles/navigation.css';

export const Navigation = (props) => {
    Navigation.propTypes = {
        searchUpdate: PropTypes.func.isRequired,
        videoTypes: PropTypes.array.isRequired,
        videoTypeChanged: PropTypes.func.isRequired,
        updateSettings: PropTypes.func.isRequired
    };

    return (
        <div className="navigation">
            <h2>Welcome to the video app!</h2>
            <Search searchUpdate={props.searchUpdate} />
            <Selection title="Video type" items={props.videoTypes} onItemChanged={props.videoTypeChanged} />
            <button className="save" onClick={props.updateSettings}>Update settings</button>
        </div>
    );
}
