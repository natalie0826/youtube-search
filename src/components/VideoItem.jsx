import React from 'react';
import PropTypes from 'prop-types';

import '../styles/video.css';

export const VideoItem = (props) => {
    VideoItem.propTypes = {
        video: PropTypes.object.isRequired,
        watchVideo: PropTypes.func.isRequired
    };

    const getDate = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const dateUTC = new Date(date);
        return dateUTC.getDate() + ' ' + months[dateUTC.getMonth()] + ' ' + dateUTC.getFullYear();
    }

    const videoInfo = props.video.snippet;

    return (
        <li className="video-item" onClick={props.watchVideo}>
            <div className="thumbnail">
                <img src={props.video.snippet.thumbnails.high.url} alt={videoInfo.title} />
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
