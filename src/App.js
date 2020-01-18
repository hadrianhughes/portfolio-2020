import React, { Fragment } from 'react';
import Router from './Router';
import GlobalStyles from './styles/global';
import { ContentProvider } from './context/Content';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <ContentProvider>
      <Router />
    </ContentProvider>
  </Fragment>
);

export default App;
