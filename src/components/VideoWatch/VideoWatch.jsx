import React from 'react';
import PropTypes from 'prop-types';

import './VideoWatch.css';

export const VideoWatch = ({ id, title }) => {
    VideoWatch.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    };

    const url = `http://www.youtube.com/embed/${id}?rel=0`;

    return (
        <div className="video-player">
            <iframe title={title} className="frame-video" data-anchor="active-video" src={url} />
        </div>
    );
};
