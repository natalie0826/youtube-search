import { connect } from 'react-redux';

import {
    setChannelId,
    fetchChannelInfo
} from '../actions/videos';
import ChannelInfo from '../components/ChannelInfo/ChannelInfo';

const mapStateToProps = state => ({
    title: state.getIn(['channel', 'title']),
    description: state.getIn(['channel', 'description']),
    imageUrl: state.getIn(['channel', 'imageUrl']),
    isChannelInfoFetching: state.getIn(['channel', 'isChannelInfoFetching'])
});

const mapDispatchToProps = dispatch => ({
    setChannelId: channelId => dispatch(setChannelId(channelId)),
    fetchChannelInfo: channelId => dispatch(fetchChannelInfo(channelId))
})

export const ChannelInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelInfo);
