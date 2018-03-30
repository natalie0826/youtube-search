import React from 'react';

import { VideosContainer } from '../containers/VideosContainer';
import { SearchContainer } from '../containers/SearchContainer';

export const App = () => {
    return (
        <section className="main">
            <SearchContainer />
            <VideosContainer />
        </section>
    );
}
