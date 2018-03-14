import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/selection.css';

export const Selection = (props) => {
    Selection.propTypes = {
        items: PropTypes.array.isRequired,
        onItemChanged: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    return (
        <div className="selection">
            <label>{props.title}</label>
            <select value="" onChange={props.onItemChanged}>
                {props.items.map(item => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}
