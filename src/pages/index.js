import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Heading from '../components/Heading';

const IndexPage = ({ content }) => (
  <Fragment>
    <Heading lines={[content.heading1, content.heading2]} />
  </Fragment>
);

IndexPage.propTypes = {
  content: PropTypes.object
};

IndexPage.defaultProps = {
  content: {}
};

export default IndexPage;
