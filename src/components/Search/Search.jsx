import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

export const Search = (props) => {
    Search.propTypes = {
        searchUpdate: PropTypes.func.isRequired,
        searchQuery: PropTypes.string.isRequired
    };

    return (
        <input type="text" placeholder="Search..." className="search" value={props.searchQuery} onChange={props.searchUpdate} />
    );
};
