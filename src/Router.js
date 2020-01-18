import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import ExamplePage from './pages/example';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/example', component: ExamplePage }
];

const Router = () => (
  <Switch>
    {
      routes.map(r => <Route {...r} exact />)
    }
  </Switch>
);

export default Router;
