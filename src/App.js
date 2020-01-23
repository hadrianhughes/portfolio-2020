import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import { ScrollProvider } from './context/ScrollContext';
import Home from './pages/Home';
import ProgressLinks from './components/ProgressLinks';
import SiteHeader from './components/SiteHeader';
import Skills from './pages/Skills';
import { get } from './utils';

const App = ({ context }) => (
  <Fragment>
    <GlobalStyles />
    <ScrollProvider sectionNames={context.navLinks.map(get(['name']))}>
      <SiteHeader />
      <main>
        <Home context={context.home} />
        <ProgressLinks links={context.navLinks} />
        <Skills context={context.skills} />
      </main>
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
