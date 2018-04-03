import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import {
    DELAY_IN_MINUTES,
    SCROLL_STEP_IN_PX
} from '../../constants/app';

import VideoList from '../VideoList/VideoList';
import { Loading } from '../Loading/Loading';
import { VideoWatch } from '../VideoWatch/VideoWatch';

export default class VideoApp extends React.Component {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        isLoading: PropTypes.bool.isRequired,
        channelId: PropTypes.string,
        activeVideoId: PropTypes.string.isRequired,
        videos: PropTypes.instanceOf(List).isRequired,
        fetchVideos: PropTypes.func.isRequired,
        setActiveVideo: PropTypes.func.isRequired,
        loadMoreVideos: PropTypes.func.isRequired
    };

    static defaultProps = {
        channelId: ''
    };

    componentDidMount() {
        this.props.fetchVideos();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.channelId !== this.props.channelId) {
            this.props.fetchVideos();
        }
    }

    scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.interval);
        }
        window.scroll(0, window.pageYOffset - SCROLL_STEP_IN_PX);
    }

    scrollToTop = () => {
        this.interval = setInterval(this.scrollStep.bind(this), DELAY_IN_MINUTES);
    }

    watchVideo = id => {
        this.props.setActiveVideo(id);
        this.scrollToTop();
    };

    loadMoreVideos = () => {
        if (this.props.videos.size) {
            this.props.loadMoreVideos();
        }
    }

    render() {
        const {
            isFetching,
            videos,
            activeVideoId,
            isLoading
        } = this.props;

        let activeVideo;
        
        if (!isFetching) {
            activeVideo = videos.find(video => video.get('id') === activeVideoId);
        }

        return (
            <section className="video-app">
                {isFetching ? (
                    <Loading loading={isFetching} color="#4B99AD" />
                ) : (
                    <div className="videos">
                        <VideoWatch title={activeVideo.get('title')} id={activeVideoId} />

                        <VideoList
                            list={videos}
                            watchVideo={this.watchVideo}
                            onPaginatedSearch={this.loadMoreVideos}
                            isLoading={isLoading}
                        />
                        {isLoading && <Loading loading={isLoading} color="#4B99AD" />}
                    </div>
                )}
            </section>
        );
    }

    
};
