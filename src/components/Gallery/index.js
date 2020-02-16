import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  List,
  ListItem,
  ItemButton
} from './styles';

const Gallery = ({ items, activeID, setActive }) => (
  <Wrapper>
    <List>
      {
        items.map(item =>
          <ListItem key={item.id} active={activeID === item.id}>
            <ItemButton onClick={setActive(item.id)}>{item.title}</ItemButton>
          </ListItem>
        )
      }
    </List>
  </Wrapper>
);

export const ItemSchema = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  image: PropTypes.string,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(ItemSchema)
  ),
  activeID: PropTypes.string,
  setActive: PropTypes.func
};

Gallery.defaultProps = {
  items: [],
  activeID: '',
  setActive: () => {}
};

export default Gallery;
