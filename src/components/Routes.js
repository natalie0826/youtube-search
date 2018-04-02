import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { App } from './App';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact key="default-search" component={App} />
            <Route path="/channel/:id" exact key="channel-search" component={App} />
        </Switch>
    )
}
