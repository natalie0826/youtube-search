import React from 'react';
import PropTypes from 'prop-types';

import '../styles/modal.css';

export const VideoWatch = (props) => {
    VideoWatch.propTypes = {
        video: PropTypes.object.isRequired
    };

    const url = `http://www.youtube.com/embed/${props.video.id.videoId}?rel=0`

    return (
        <div className="video-player">
            <iframe title={props.video.snippet.title} className="frame-video" src={url}></iframe>
        </div>
    );
}