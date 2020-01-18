import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Heading from '../components/Heading';
import Page from '../components/Page';

const IndexPage = ({ content }) => (
  <Page>
    <Heading lines={[content.heading1, content.heading2]} />
  </Page>
);

IndexPage.propTypes = {
  content: PropTypes.object
};

IndexPage.defaultProps = {
  content: {}
};

export default IndexPage;
