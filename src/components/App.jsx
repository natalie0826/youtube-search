import React from 'react';
import PropTypes from 'prop-types';

import { VideosContainer } from '../containers/VideosContainer';
import { SearchContainer } from '../containers/SearchContainer';
import { ChannelInfoContainer } from '../containers/ChannelInfoContainer'; 

export const App = ({ location }) => {
    App.propTypes = {
        location: PropTypes.objectOf(PropTypes.string).isRequired
    };

    return (
        <section className="main">
            <SearchContainer />
            {location.pathname !== '/' ?
                <div>
                    <ChannelInfoContainer channelId={location.pathname} />
                    <VideosContainer channelId={location.pathname} />
                </div>
                : <VideosContainer />
            }
        </section>
    );
}
