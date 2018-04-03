import React from 'react';
import PropTypes from 'prop-types';

import { VideosContainer } from '../containers/VideosContainer';
import { SearchContainer } from '../containers/SearchContainer';
import { ChannelInfoContainer } from '../containers/ChannelInfoContainer'; 

export const App = ({ match }) => {
    App.propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node,
            }).isRequired,
        }).isRequired,
    };

    return (
        
        <section className="main">
            <SearchContainer />
            {match.params.id ?
                <div>
                    <ChannelInfoContainer channelId={match.params.id} />
                    <VideosContainer channelId={match.params.id} />
                </div>
                :   <VideosContainer />
            }
        </section>
    );
}
