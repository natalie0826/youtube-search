import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

import { Selection } from '../Selection/Selection';
import { PageInfo } from '../PageInfo/PageInfo';
import {
    MIN_QUERY_LENGTH,
    MILLISECONDS_TO_WAIT,
    VIDEO_TYPES,
    PER_PAGE_VALUES
} from '../../constants/app';
import './Navigation.css';

export const Navigation = (props) => {
    Navigation.propTypes = {
        totalCount: PropTypes.number.isRequired,
        activeType: PropTypes.string.isRequired,
        searchQuery: PropTypes.string.isRequired,
        perPage: PropTypes.number.isRequired,
        setVideoType: PropTypes.func.isRequired,
        setPerPageValue: PropTypes.func.isRequired,
        updateSearchQueryAndFetch: PropTypes.func.isRequired
    };

    const setVideoType = e => {
        props.setVideoType(e.target.value);
    };

    const setPerPageValue = e => {
        props.setPerPageValue(e.target.value);
    };

    const updateSearchAndFetch = e => {
        updateSearchQueryAndFetch(e.target.value, props.activeType, props.perPage);
    };

    const {
        totalCount,
        searchQuery,
        updateSearchQueryAndFetch,
        activeType,
        perPage
    } = props;

    return (
        <section className="navigation">
            <div className="search-block">
                <div className="title-separator">Start searching</div>
                <DebounceInput
                    placeholder="Search..."
                    className="search"
                    minLength={MIN_QUERY_LENGTH}
                    value={searchQuery}
                    debounceTimeout={MILLISECONDS_TO_WAIT}
                    onChange={updateSearchAndFetch}
                />
            </div>
            <div className="settings-block">
                <div className="title-separator">Settings</div>
                <Selection
                    title="Video type"
                    items={VIDEO_TYPES}
                    active={activeType}
                    onItemChanged={setVideoType}
                />
                <Selection
                    title="Per page"
                    items={PER_PAGE_VALUES}
                    active={perPage}
                    onItemChanged={setPerPageValue}
                />
            </div>
            <div className="page-info-block">
                <div className="title-separator">Page info</div>
                <div className="info">
                    <PageInfo subtitle="Total count" value={totalCount} />
                </div>
            </div>
        </section>
    );
}
