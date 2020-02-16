import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../components/Heading';
import PageHOC from '../../components/Page/PageHOC';
import Gallery from '../../components/Gallery/GalleryContainer';

const Experience = ({ context }) => (
  <Fragment>
    <Heading text={context.heading} />
    <Gallery items={context.galleryItems} />
  </Fragment>
);

Experience.propTypes = {
  context: PropTypes.object
};

Experience.defaultProps = {
  context: {}
};

export default PageHOC('experience')(Experience);
