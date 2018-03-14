import React from 'react';
import PropTypes from 'prop-types';

import { VideoItem } from './VideoItem';
import '../styles/videos.css';

export const VideoList = (props) => {
    VideoList.propTypes = {
        videos: PropTypes.array.isRequired
    };

    return (
        <section>
            <ul className="videos">
                {props.videos.map((video, index) => {
                    return <VideoItem key={index.toString()} video={video} watchVideo={() => props.watchVideo(video)} />
            })}
            </ul>
        </section>
    );
}
