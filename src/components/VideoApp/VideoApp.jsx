import React from 'react';
import PropTypes from 'prop-types';


import { withInfiniteScroll } from '../InfiniteScroll/withInfiniteScroll';
import { VideoList } from '../VideoList/VideoList';
import { Loading } from '../Loading/Loading';

import { VideoWatch } from '../VideoWatch/VideoWatch';

export const VideoApp = (props) => {
    VideoApp.propTypes = {
        isFetching: PropTypes.bool.isRequired,
        isLoading: PropTypes.bool.isRequired,
        activeVideoId: PropTypes.string.isRequired,
        videos: PropTypes.arrayOf(PropTypes.object).isRequired,
        setActiveVideo: PropTypes.func.isRequired,
        loadMoreVideos: PropTypes.func.isRequired
    };

    const watchVideo = video => {
        props.setActiveVideo(video.id.videoId);
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scroll(0, window.pageYOffset - 50);
    };

    const {
        videos,
        activeVideoId
    } = props;

    const VideosWithInfinite = withInfiniteScroll(VideoList);

    const activeVideo = videos.find(video => video.id.videoId === activeVideoId);

    return (
        <section className="video-app">
            {props.isFetching ? (
                <Loading loading={props.isFetching} />
            ) : (
                <div className="videos">
                    <VideoWatch title={activeVideo.snippet.title} id={activeVideoId} />

                    <VideosWithInfinite
                        list={props.videos}
                        watchVideo={video => watchVideo(video)}
                        onPaginatedSearch={props.loadMoreVideos}
                        isLoading={props.isLoading}
                    />
                    {props.isLoading && <Loading loading={props.isFetching} />}
                </div>
            )}
        </section>
    );
};
