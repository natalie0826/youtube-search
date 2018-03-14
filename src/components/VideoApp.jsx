import React from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";

import { VideoList } from './VideoList';
import { Navigation } from './left menu/Navigation';
import { Loading } from './Loading';
import { constants } from '../constants/constants';
import { VideoWatch } from './VideoWatch';

export default class VideoApp extends React.Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        video: PropTypes.object,
        videos: PropTypes.array,
        videoTypes: PropTypes.array.isRequired,
        fetchVideos: PropTypes.func.isRequired,
        setActiveVideo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            video: {},
            searchQuery: '',
            videoType: ''
        }

        this.fetchVideosAgain = _.debounce(this.fetchVideosAgain, 500);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    searchUpdate = (event) => {
        if (event.target.value.trim().length > constants.minQueryLength) {
            this.setState({searchQuery: event.target.value});
            this.fetchVideosAgain();    
        }
    }

    fetchVideosAgain(videoType = this.props.videoTypes[0]) {
        this.props.fetchVideos(this.state.searchQuery, videoType);
    }

    videoTypeChanged = (event) => {
        this.setState({videoType: event.target.value});
    }

    watchVideo = (video) => {
        this.props.setActiveVideo(video.id.videoId);
    }

    updateSettings = () => {
        this.fetchVideosAgain(this.state.searchQuery, this.state.videoType);
    }

    render() {
        return (
            <section className="main">
                <Navigation searchUpdate={this.searchUpdate}
                            videoTypes={this.props.videoTypes}
                            videoTypeChanged={this.videoTypeChanged}
                            updateSettings={this.updateSettings} />
                {this.props.isFetching
                    ?   <Loading loading={this.props.isFetching}/>
                    :   <div className="videos">
                            <VideoWatch video={this.props.video} />
                            <VideoList videos={this.props.videos} store={this.props.store} watchVideo={(video) => this.watchVideo(video)} />
                        </div>
                }
            </section>
        );
    }
}