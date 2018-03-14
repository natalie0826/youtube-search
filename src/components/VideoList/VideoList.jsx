import React from 'react';
import PropTypes from 'prop-types';

import { VideoItem } from '../VideoItem/VideoItem';
import './videos.css';

export const VideoList = props => {
    VideoList.propTypes = {
        videos: PropTypes.array.isRequired,
    };

    return (
        <section className="video-list">
            <ul className="videos">
                {props.videos.map((video) => {
                    return (
                        <VideoItem key={video.id.videoId} video={video} watchVideo={() => props.watchVideo(video)} />
                    );
                })}
            </ul>
        </section>
    );
};
