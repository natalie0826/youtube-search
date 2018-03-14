import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { VideoList } from '../VideoList/VideoList';
import { Navigation } from '../Navigation/Navigation';
import { Loading } from '../Loading/Loading';
import { MIN_QUERY_LENGTH } from '../../constants/app';

import { VideoWatch } from '../VideoWatch/VideoWatch';

export default class VideoApp extends React.Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        video: PropTypes.object,
        videos: PropTypes.array,
        videoTypes: PropTypes.array.isRequired,
        fetchVideos: PropTypes.func.isRequired,
        setActiveVideo: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            video: {},
            searchQuery: '',
            videoType: '',
        };

        this.fetchVideosAgain = debounce(this.fetchVideosAgain, 500);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    searchUpdate = event => {
        if (event.target.value.trim().length > MIN_QUERY_LENGTH) {
            this.setState({ searchQuery: event.target.value });
            this.fetchVideosAgain();
        }
    };

    fetchVideosAgain(searchQuery = this.state.searchQuery,
                    videoType = this.props.videoTypes[0]) {
        this.props.fetchVideos(searchQuery, videoType);
    }

    videoTypeChanged = event => {
        this.setState({ videoType: event.target.value });
    };

    watchVideo = video => {
        this.props.setActiveVideo(video.id.videoId);
    };

    updateSettings = () => {
        this.fetchVideosAgain(this.state.searchQuery, this.state.videoType);
    };

    render() {
        return (
            <section className="main">
                <Navigation
                    searchUpdate={this.searchUpdate}
                    videoTypes={this.props.videoTypes}
                    videoTypeChanged={this.videoTypeChanged}
                    updateSettings={this.updateSettings}
                    isFetching={this.props.isFetching}
                />
                {this.props.isFetching ? (
                    <Loading loading={this.props.isFetching} />
                ) : (
                    <div className="videos">
                        <VideoWatch title={this.props.video.snippet.title} id={this.props.video.id.videoId} />

                        <VideoList
                            videos={this.props.videos}
                            store={this.props.store}
                            watchVideo={video => this.watchVideo(video)}
                        />
                    </div>
                )}
            </section>
        );
    }
}
