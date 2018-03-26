import React from 'react';
import PropTypes from 'prop-types';

import Videos from '../../records/videos';
import { VideoItem } from '../VideoItem/VideoItem';
import './VideoList.css';

export const VideoList = ({ list, watchVideo }) => {
    VideoList.propTypes = {
        list: PropTypes.instanceOf(Videos).isRequired,
        watchVideo: PropTypes.func.isRequired,
    };

    return (
        <section className="video-list">
            <ul className="videos">
                {list.map((video) => {

                    return (
                        <VideoItem
                            key={video.get('id')}
                            watchVideo={() => watchVideo(video)}
                            title={video.get('title')}
                            imgUrl={video.get('imageUrl')}
                            channel={video.get('channelTitle')}
                            date={video.get('publishedAt')}
                        />
                    );
                })}
            </ul>
        </section>
    );
};
