import React from 'react';
import PropTypes from 'prop-types';
import GalleryDisplay from './GalleryDisplay';
import {
  Wrapper,
  List,
  ListItem,
  ItemButton,
  CollapseButton
} from './styles';

const Gallery = ({
  items,
  activeID,
  setActive,
  collapsed,
  onCollapse
}) => (
  <Wrapper>
    <List collapsed={collapsed}>
      {
        items.map(item =>
          <ListItem key={item.id} active={activeID === item.id}>
            <ItemButton onClick={setActive(item.id)}>{item.title}</ItemButton>
          </ListItem>
        )
      }
      <CollapseButton onClick={onCollapse}>
        {collapsed ? '+' : '-'}
      </CollapseButton>
    </List>
    <GalleryDisplay {...items.find(x => x.id === activeID)} />
  </Wrapper>
);

export const ItemSchema = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
  extraIcon: PropTypes.string,
  extraIconAlt: PropTypes.string
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(ItemSchema)
  ),
  activeID: PropTypes.string,
  setActive: PropTypes.func,
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func
};

Gallery.defaultProps = {
  items: [],
  activeID: '',
  setActive: () => {},
  collapsed: false,
  onCollapse: () => {}
};

export default Gallery;
