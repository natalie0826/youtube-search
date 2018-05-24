import React from 'react';
import PropTypes from 'prop-types';

import { VideosContainer } from '../containers/VideosContainer';
import { SearchContainer } from '../containers/SearchContainer';

export const App = ({ match }) => {
    App.propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node,
            }).isRequired,
        }),
    };

    App.defaultProps = {
        match: {
            params: {
                id: null
            }
        }
    };

    return (
        <section className="main">
            <SearchContainer channelId={match.params.id} />
            <VideosContainer channelId={match.params.id} />
        </section>
    );
}
