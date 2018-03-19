import React from 'react';
import PropTypes from 'prop-types';

import './PageInfo.css';

export const PageInfo = (props) => {
    PageInfo.propTypes = {
        subtitle: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    };

    return (
        <div className="row">
            <span className="subtitle-content">{props.subtitle}</span>
            <div className="dots-center">
                <span className="dots"></span>
            </div>
            <span className="subtitile-info">{props.value}</span>
        </div> 
    )
}
