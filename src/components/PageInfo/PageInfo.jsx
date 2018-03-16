import React from 'react';
import PropTypes from 'prop-types';

import './PageInfo.css';

export const PageInfo = (props) => {
    PageInfo.propTypes = {
        subtitle: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    };

    return (
        <div className="info">
            <span className="subtitle-content">{props.subtitle}</span>
            <span className="subtitle-info">{props.value}</span>              
        </div>
    )
}
