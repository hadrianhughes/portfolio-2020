import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import { ScrollProvider } from './context/ScrollContext';
import HomePage from './pages/Home';
import SkillsPage from './pages/Skills';
import AboutMe from './pages/About';
import Nav from './components/ProgressLinks';
import SiteFooter from './components/SiteFooter';
import { get } from './utils';

const App = ({ context }) => (
  <Fragment>
    <GlobalStyles />
    <ScrollProvider sectionNames={context.navLinks.map(get(['name']))}>
      <main>
        <HomePage context={context.home} navLinks={context.navLinks} />
        <Nav links={context.navLinks} />
        <AboutMe context={context.about} />
        <SkillsPage context={context.skills} />
      </main>
      <SiteFooter copyright={context.copyright} />
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
