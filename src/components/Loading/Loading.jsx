import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';

import './Loading.css';

export const Loading = (props) => {
    Loading.propTypes = {
        loading: PropTypes.bool.isRequired
    };

    return (
        <div className="loading">
            <BeatLoader color={'#4B99AD'} loading={props.loading} />
        </div>
    );
};
