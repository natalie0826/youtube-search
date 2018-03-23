import React from 'react';
import PropTypes from 'prop-types';

import {
    DELAY_IN_MINUTES,
    SCROLL_STEP_IN_PX
} from '../../constants/app';
import { withInfiniteScroll } from '../InfiniteScroll/withInfiniteScroll';
import { VideoList } from '../VideoList/VideoList';
import { Loading } from '../Loading/Loading';
import { VideoWatch } from '../VideoWatch/VideoWatch';

export default class VideoApp extends React.Component {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        isLoading: PropTypes.bool.isRequired,
        activeVideoId: PropTypes.string.isRequired,
        videos: PropTypes.arrayOf(PropTypes.object).isRequired,
        fetchVideos: PropTypes.func.isRequired,
        setActiveVideo: PropTypes.func.isRequired,
        loadMoreVideos: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            interval: 0
        };
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.interval);
        }
        window.scroll(0, window.pageYOffset - SCROLL_STEP_IN_PX);
    }

    scrollToTop = () => {
        const interval = setInterval(this.scrollStep.bind(this), DELAY_IN_MINUTES);
        this.setState({ interval: interval });
    }

    watchVideo = video => {
        this.props.setActiveVideo(video.id.videoId);
        this.scrollToTop();
    };

    render() {
        const {
            isFetching,
            videos,
            activeVideoId,
            loadMoreVideos,
            isLoading
        } = this.props;

        const VideosWithInfinite = withInfiniteScroll(VideoList);

        const activeVideo = videos.find(video => video.id.videoId === activeVideoId);

        return (
            <section className="video-app">
                {isFetching ? (
                    <Loading loading={isFetching} color="#4B99AD" />
                ) : (
                    <div className="videos">
                        <VideoWatch title={activeVideo.snippet.title} id={activeVideoId} />

                        <VideosWithInfinite
                            list={videos}
                            watchVideo={video => this.watchVideo(video)}
                            onPaginatedSearch={loadMoreVideos}
                            isLoading={isLoading}
                        />
                        {isLoading && <Loading loading={isLoading} color="#4B99AD" />}
                    </div>
                )}
            </section>
        );
    }

    
};
