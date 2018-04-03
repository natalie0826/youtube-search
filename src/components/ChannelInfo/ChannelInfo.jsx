import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Loading } from '../Loading/Loading';

import './ChannelInfo.css';

export default class ChannelInfo extends React.Component {
    static propTypes = {
        fetchChannelInfo: PropTypes.func.isRequired,
        setChannelId: PropTypes.func.isRequired,
        channelId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        isChannelInfoFetching: PropTypes.bool.isRequired
    }

    componentDidMount() {
        this.props.setChannelId(this.props.channelId);
        this.props.fetchChannelInfo(this.props.channelId);
    }

    render() {
        const {
            title,
            imageUrl,
            description,
            isChannelInfoFetching
        } = this.props;

        if (isChannelInfoFetching) {
            return <Loading loading={isChannelInfoFetching} color="#4B99AD" />;
        }

        return (
            <div className="channel">
                <img src={imageUrl} alt={title} className="channel-image" />
                <div className="channel-info">
                    <h4><b>{title}</b></h4> 
                    <p>{description}</p> 
                </div>
                <Link to="/">Back</Link>
            </div>
        );
    }
};
