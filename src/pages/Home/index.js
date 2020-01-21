import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/Page';
import Heading from '../../components/Heading';
import NavLinks from '../../components/NavLinks';

const Home = ({ context }) => (
  <Page topMargin>
    <Heading lines={[context.headingLineOne, context.headingLineTwo]} />
    <NavLinks links={context.navLinks} />
  </Page>
);

Home.propTypes = {
  context: PropTypes.object
};

Home.defaultProps = {
  context: {}
};

export default Home;
