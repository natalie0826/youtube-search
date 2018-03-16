import React from 'react';
import PropTypes from 'prop-types';

import './search.css';

export const Search = (props) => {
    Search.propTypes = {
        searchUpdate: PropTypes.func.isRequired
    };

    return (
        <input type="text" placeholder="Search..." className="search" onChange={props.searchUpdate} />
    );
}