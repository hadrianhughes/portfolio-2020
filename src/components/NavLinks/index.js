import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, StyledLink } from './styles';

const NavLinks = ({ links }) => (
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

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string
    })
  )
};

NavLinks.defaultProps = {
  links: []
};

export default NavLinks;
