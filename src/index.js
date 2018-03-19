import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './configureStore';
import { VideosContainer } from './containers/VideosContainer';
import { SearchContainer } from './containers/SearchContainer';
import './index.css';

render(
    <Provider store={configureStore}>
        <section className="main">
            <VideosContainer />
            <SearchContainer />
        </section>
    </Provider>,
    document.getElementById('root'),
);
