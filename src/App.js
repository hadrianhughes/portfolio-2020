import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import { ScrollProvider } from './context/ScrollContext';
import HomePage from './pages/Home';
import SkillsPage from './pages/Skills';
import Nav from './components/ProgressLinks';
import SiteHeader from './components/SiteHeader';
import { get } from './utils';

const App = ({ context }) => (
  <Fragment>
    <GlobalStyles />
    <ScrollProvider sectionNames={context.navLinks.map(get(['name']))}>
      <SiteHeader />
      <main>
        <HomePage context={context.home} />
        <Nav links={context.navLinks} />
        <SkillsPage context={context.skills} />
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
