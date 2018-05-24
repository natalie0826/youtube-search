import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './VideoItem.css';

export default class VideoItem extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        channelTitle: PropTypes.string.isRequired,
        channelId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        watchVideo: PropTypes.func.isRequired
    };

    watchVideo = () => {
        this.props.watchVideo(this.props.id);
    };

    render () {
        const {
            title,
            imgUrl,
            channelTitle,
            channelId,
            date
        } = this.props;

        return (
            <li className="video-item" onClick={this.watchVideo} role="presentation">
                <div className="thumbnail">
                    <div className="video-preview">
                        <img src={imgUrl} alt={title} />
                        <div className="play-button" />
                    </div>
                    <div className="video-description">
                        <h3 className="video-title">{title}</h3>
                        <section className="video-details">
                            <div className="video-channel">
                                <span className="title">Channel Title</span>
                                <Link to={`/channel/${channelId}`} style={{ textDecoration: 'none' }}>
                                    <span className="channel-title">{channelTitle}</span>
                                </Link>
                            </div>
                            <div className="video-date">
                                <span className="title">Date</span>
                                <span>{date}</span>
                            </div>
                        </section>
                    </div>
                </div>
            </li>
        );
    }
};
