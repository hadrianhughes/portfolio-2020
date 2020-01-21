import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import Home from './pages/Home';
import Skills from './pages/Skills';

const App = ({ context }) => (
  <Fragment>
    <GlobalStyles />
    <Home context={context.home} />
    <Skills />
  </Fragment>
);

App.propTypes = {
  context: PropTypes.object
};

App.defaultProps = {
  context: {}
};

export default App;
