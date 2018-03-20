import React from 'react';
import PropTypes from 'prop-types';

import { VideoItem } from '../VideoItem/VideoItem';
import './VideoList.css';

export const VideoList = props => {
    VideoList.propTypes = {
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    return (
        <section className="video-list">
            <ul className="videos">
                {props.list.map((video) => {
                    const videoInfo = video.snippet;

                    return (
                        <VideoItem
                            key={video.id.videoId}
                            watchVideo={() => props.watchVideo(video)}
                            title={videoInfo.title}
                            imgUrl={videoInfo.thumbnails.high.url}
                            channel={videoInfo.channelTitle}
                            date={videoInfo.publishedAt}
                        />
                    );
                })}
            </ul>
        </section>
    );
};
