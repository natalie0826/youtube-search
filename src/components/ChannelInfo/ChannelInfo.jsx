import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ChannelInfo extends React.Component {
    static propTypes = {
        fetchChannelInfo: PropTypes.func.isRequired,
        setChannelId: PropTypes.func.isRequired,
        channelId: PropTypes.string.isRequired
    }

    componentDidMount() {
        this.props.setChannelId(this.props.channelId);
        this.props.fetchChannelInfo(this.props.channelId);
    }

    render() {
        return (
            <div>
                <div>ChannelInfo</div>
                <Link to="/">Back</Link>
            </div>
        );
    }
    
};
