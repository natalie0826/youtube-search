import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { withInfiniteScroll } from '../InfiniteScroll/withInfiniteScroll';
import { VideoList } from '../VideoList/VideoList';
import { Loading } from '../Loading/Loading';
import { MIN_QUERY_LENGTH } from '../../constants/app';

import { VideoWatch } from '../VideoWatch/VideoWatch';

export default class VideoApp extends React.Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        video: PropTypes.object,
        videos: PropTypes.array,
        // setActiveVideo: PropTypes.func.isRequired,
        // loadMoreVideos: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        // this.fetchVideosAgain = debounce(this.fetchVideosAgain, 500);
    }

    // searchUpdate = event => {
    //     if (event.target.value.trim().length > MIN_QUERY_LENGTH) {
    //         this.setState({ searchQuery: event.target.value });
    //         this.fetchVideosAgain();
    //     }
    // };

    // fetchVideosAgain(searchQuery = this.state.searchQuery, videoType = this.props.activeType, nextPageToken) {
    //     this.props.fetchVideos(searchQuery, videoType);
    // }

    watchVideo = video => {
        this.props.setActiveVideo(video.id.videoId);
    };

    updateSettings = () => {
        this.fetchVideosAgain(this.state.searchQuery, this.props.activeType);
    };

    loadMoreVideos = () => {
        // this.fetchVideosAgain(this.props.searchQuery, this.props.activeType, this.props.pageInfo.nextPageToken)
    }

    render() {
        const VideosWithInfinite = withInfiniteScroll(VideoList);

        return (
            <section className="video-app">
                {this.props.isFetching ? (
                    <Loading loading={this.props.isFetching} />
                ) : (
                    <div className="videos">
                        <VideoWatch title={this.props.video.snippet.title} id={this.props.video.id.videoId} />

                        {/* <VideoList
                            videos={this.props.videos}
                            watchVideo={video => this.watchVideo(video)}
                        /> */}

                        <VideosWithInfinite
                            list={this.props.videos}
                            watchVideo={video => this.watchVideo(video)}
                            onPaginatedSearch={() => this.loadMoreVideos()}
                        />
                    </div>
                )}
            </section>
        );
    }
}
