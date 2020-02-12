import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../components/Heading';
import PageHOC from '../../components/Page/PageHOC';

const About = ({ context }) => (
  <Fragment>
    <Heading text={context.heading} />
    <p>{context.text}</p>
  </Fragment>
);

About.propTypes = {
  context: PropTypes.object
};

About.defaultProps = {
  context: {}
};

export default PageHOC('about')(About);
