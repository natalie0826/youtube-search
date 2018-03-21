import React from 'react';
import PropTypes from 'prop-types';

import { getDate } from '../../tools/date-tool';
import './VideoItem.css';

export const VideoItem = (props) => {
    VideoItem.propTypes = {
        title: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        channel: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        watchVideo: PropTypes.func.isRequired
    };

    return (
        <li className="video-item" onClick={props.watchVideo} role="presentation">
            <div className="thumbnail">
                <div className="video-preview">
                    <img src={props.imgUrl} alt={props.title} />
                    <div className="play-button" />
                </div>
                <div className="video-description">
                    <h3>{props.title}</h3>
                    <section className="video-details">
                        <div className="video-channel">
                            <span className="title">Channel Title</span>
                            <span>{props.channel}</span>
                        </div>
                        <div className="video-date">
                            <span className="title">Date</span>
                            <span>{getDate(props.date)}</span>
                        </div>
                    </section>
                </div>
            </div>
        </li>
    );
};
