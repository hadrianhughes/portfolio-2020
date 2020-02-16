import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Gallery, { ItemSchema } from './index';

const GalleryContainer = ({ items }) => {
  const [activeID, setActive] = useState(items[0].id);
  const [collapsed, setCollapsed] = useState(true);

  const handleSetActive = id => () => setActive(id);
  const handleCollapse = () => setCollapsed(!collapsed);

  return (
    <Gallery
      items={items}
      activeID={activeID}
      setActive={handleSetActive}
      collapsed={collapsed}
      onCollapse={handleCollapse} />
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
