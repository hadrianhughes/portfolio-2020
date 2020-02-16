import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../components/Heading';
import IconList from '../../components/IconList';
import NavLinks from '../../components/NavLinks';
import PageHOC from '../../components/Page/PageHOC';

const Home = ({ context, navLinks }) => (
  <Fragment>
    <Heading
      lines={[context.headingLineOne, context.headingLineTwo]}
      main />
    <IconList items={context.socialMedia} />
    <NavLinks links={navLinks} />
  </Fragment>
);

Home.propTypes = {
  context: PropTypes.object,
  navLinks: PropTypes.arrayOf(PropTypes.object)
};

Home.defaultProps = {
  context: {},
  navLinks: []
};

export default PageHOC('home')(Home);
