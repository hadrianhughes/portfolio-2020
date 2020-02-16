import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Icon } from './styles';

const IconList = ({ items }) => (
  <List>
    {
      items.map((item, index) =>
        <ListItem key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Icon src={item.icon} alt={item.alt} />
          </a>
        </ListItem>
      )
    }
    </List>
);

IconList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  )
};

IconList.defaultProps = {
  items: []
};

export default IconList;
