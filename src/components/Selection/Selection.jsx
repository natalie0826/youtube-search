import React from 'react';
import PropTypes from 'prop-types';

import './Selection.css';

export const Selection = (props) => {
    Selection.propTypes = {
        items: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.number)
        ]).isRequired,
        active: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        onItemChanged: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    return (
        <div className="selection">
            <span htmlFor="selection">{props.title}</span>
            <select value={props.active} onChange={props.onItemChanged} onBlur={props.onItemChanged}>
                {props.items.map(item => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};
