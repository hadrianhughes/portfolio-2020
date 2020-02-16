import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Gallery, { ItemSchema } from './index';

const GalleryContainer = ({ items }) => {
  const [activeID, setActive] = useState(items[0].id);

  const handleSetActive = id => () => setActive(id);

  return (
    <Gallery
      items={items}
      activeID={activeID}
      setActive={handleSetActive} />
  );
};

GalleryContainer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(ItemSchema)
  )
};

GalleryContainer.defaultProps = {
  items: []
};

export default GalleryContainer;
