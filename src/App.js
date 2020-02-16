import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import { ScrollProvider } from './context/ScrollContext';
import HomePage from './pages/Home';
import SkillsPage from './pages/Skills';
import AboutMePage from './pages/About';
import ExperiencePage from './pages/Experience';
import Nav from './components/ProgressLinks';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import { get } from './utils';

const App = ({ context }) => (
  <Fragment>
    <GlobalStyles />
    <ScrollProvider sectionNames={context.navLinks.map(get(['name']))}>
      <SiteHeader />
      <main>
        <HomePage context={context.home} navLinks={context.navLinks} />
        <Nav links={context.navLinks} />
        <AboutMePage context={context.about} />
        <SkillsPage context={context.skills} />
        <ExperiencePage context={context.experience} />
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
