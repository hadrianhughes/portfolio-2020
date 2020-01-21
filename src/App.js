import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import { ScrollProvider } from './context/ScrollContext';
import Home from './pages/Home';
import ProgressLinks from './components/ProgressLinks';
import Skills from './pages/Skills';

const App = ({ context }) => (
  <Fragment>
    <GlobalStyles />
    <ScrollProvider>
      <Home context={context.home} />
      <ProgressLinks links={context.navLinks} />
      <Skills context={context.skills} />
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
