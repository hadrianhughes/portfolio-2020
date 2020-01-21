import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import { ScrollProvider } from './context/ScrollContext';
import Home from './pages/Home';
import Skills from './pages/Skills';

const App = ({ context }) => (
  <Fragment>
    <GlobalStyles />
    <ScrollProvider>
      <Home context={context} />
      <Skills context={context} />
    </ScrollProvider>
  </Fragment>
);

App.propTypes = {
  context: PropTypes.object
};

App.defaultProps = {
  context: {}
};

export default App;
