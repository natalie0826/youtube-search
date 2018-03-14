import React from 'react';
import PropTypes from 'prop-types';

import { getDate } from '../../tools/date-tool';
import './video.css';

export const VideoItem = (props) => {
    VideoItem.propTypes = {
        video: PropTypes.object.isRequired,
        watchVideo: PropTypes.func.isRequired
    };

    const videoInfo = props.video.snippet;

    return (
        <li className="video-item" onClick={props.watchVideo}>
            <div className="thumbnail">
                <div className="video-preview">
                    <img src={props.video.snippet.thumbnails.high.url} alt={videoInfo.title} />
                    <div className="play-button"></div>
                </div>
                <div className="video-description">
                <h2>{videoInfo.title}</h2>
                <section className="video-details">
                    <div className="video-channel">
                        <span className="title">Channel Title</span>
                        <span>{videoInfo.channelTitle}</span>
                    </div>
                    <div className="video-date">
                        <span className="title">Date</span>
                        <span>{getDate(videoInfo.publishedAt)}</span>
                    </div>
                </section>
                </div>
            </div>
        </li>
    );
}
