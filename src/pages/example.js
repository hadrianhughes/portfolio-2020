import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ExamplePage = ({ content }) => (
  <Fragment>
    <p>{content.paragraph}</p>
  </Fragment>
);

ExamplePage.propTypes = {
  content: PropTypes.object
};

ExamplePage.defaultProps = {
  content: {}
};

export default ExamplePage;
