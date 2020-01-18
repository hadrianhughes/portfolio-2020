import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import Heading from '../components/Heading';
import NavLinks from '../components/NavLinks';

const IndexPage = ({ content }) => (
  <Page>
    <Heading lines={[content.heading1, content.heading2]} />
    <NavLinks links={content.links} />
  </Page>
);

IndexPage.propTypes = {
  content: PropTypes.object
};

IndexPage.defaultProps = {
  content: {}
};

export default IndexPage;
