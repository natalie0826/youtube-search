import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';

import './Loading.css';

export const Loading = ({ loading, color}) => {
    Loading.propTypes = {
        loading: PropTypes.bool.isRequired,
        color: PropTypes.string
    };

    Loading.defaultProps = {
        color: '#000000'
    };

    return (
        <div className="loading">
            <BeatLoader color={color} loading={loading} />
        </div>
    );
};
