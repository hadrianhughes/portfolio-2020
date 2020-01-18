import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContentContext } from './context/Content';
import IndexPage from './pages/index';
import ExamplePage from './pages/example';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/example', component: ExamplePage }
];

const Router = () => {
  const ctx = useContext(ContentContext);
  console.log(ctx);

  return (
    <Switch>
      {
        routes.map(r =>
          <Route
            key={r.path}
            path={r.path}
            exact
            render={({ staticContext }) => {
              ctx.addContent(r.path, staticContext);

              const Component = r.component;
              return <Component />;
            }} />
        )
      }
    </Switch>
  );
};

export default Router;
