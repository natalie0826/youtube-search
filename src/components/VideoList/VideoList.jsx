import React from 'react';
import PropTypes from 'prop-types';

import { VideoItem } from '../VideoItem/VideoItem';
import './VideoList.css';

export const VideoList = ({ list, watchVideo }) => {
    VideoList.propTypes = {
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        watchVideo: PropTypes.func.isRequired,
    };

    return (
        <section className="video-list">
            <ul className="videos">
                {list.map((video) => {
                    const videoInfo = video.snippet;

                    return (
                        <VideoItem
                            key={video.id.videoId}
                            watchVideo={() => watchVideo(video)}
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
