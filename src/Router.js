import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import ExamplePage from './pages/example';

const Router = () => (
  <Switch>
    <Route path="/" exact component={IndexPage} />
    <Route path="/example" exact component={ExamplePage} />
  </Switch>
);

export default Router;
