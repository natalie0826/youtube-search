import { connect } from 'react-redux';

import {
    setChannelId,
    fetchChannelInfo
} from '../actions/videos';
import ChannelInfo from '../components/ChannelInfo/ChannelInfo';

const mapDispatchToProps = dispatch => ({
    setChannelId: channelId => dispatch(setChannelId(channelId)),
    fetchChannelInfo: channelId => dispatch(fetchChannelInfo(channelId))
})

export const ChannelInfoContainer = connect(
    null,
    mapDispatchToProps
)(ChannelInfo);
