import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from './components/Page';
import Heading from './components/Heading';
import NavLinks from './components/NavLinks';
import GlobalStyles from './styles/global';

const App = ({ context }) => (
  <Fragment>
    <GlobalStyles />
    <Page>
      <Heading lines={[context.headingLineOne, context.headingLineTwo]} />
      <NavLinks links={context.navLinks} />
    </Page>
  </Fragment>
);

App.propTypes = {
  context: PropTypes.object
};

App.defaultProps = {
  context: {}
};

export default App;
