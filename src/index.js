import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './configureStore';
import { VideosContainer } from './containers/VideosContainer';

render(
    <Provider store={configureStore}>
        <VideosContainer />
    </Provider>,
    document.getElementById('root'),
);
