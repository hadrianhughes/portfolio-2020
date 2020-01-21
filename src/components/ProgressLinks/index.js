import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, StyledLink } from './styles';

const ProgressLinks = ({ links }) => (
  <List>
    {
      links.map(l =>
        <Item key={l.href}>
          <StyledLink href={l.href}>{l.text}</StyledLink>
        </Item>
      )
    }
  </List>
);

ProgressLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

ProgressLinks.defaultProps = {
  links: []
};

export default ProgressLinks;
