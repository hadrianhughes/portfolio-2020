import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import Page from '../../components/Page';
import Heading from '../../components/Heading';
import NavLinks from '../../components/NavLinks';

const Home = ({ context }) => {
  const { refs } = useContext(ScrollContext);

  return (
    <Page theRef={refs.home} topPadding fullWidth>
      <Heading lines={[context.headingLineOne, context.headingLineTwo]} />
      <NavLinks links={context.navLinks} />
    </Page>
  );
};

Home.propTypes = {
  context: PropTypes.object
};

Home.defaultProps = {
  context: {}
};

export default Home;
