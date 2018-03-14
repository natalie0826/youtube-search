import React from 'react';
import PropTypes from 'prop-types';
import { BeatLoader } from 'react-spinners';

import '../styles/loading.css';

export const Loading = (props) => {
    Loading.propTypes = {
        loading: PropTypes.bool.isRequired
    }

    return (
        <div className='loading'>
            <BeatLoader color={'rgb(22, 1, 1)'} loading={props.loading}/>
        </div>
    )
};