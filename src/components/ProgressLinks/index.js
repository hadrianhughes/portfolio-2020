import React from 'react';
import PropTypes from 'prop-types';
import { Nav, List, Item, StyledLink } from './styles';

const ProgressLinks = ({ links }) => (
  <Nav>
    <List>
      {
        links.map(l =>
          <Item key={l.href}>
            <StyledLink href={l.href}>{l.text}</StyledLink>
          </Item>
        )
      }
    </List>
  </Nav>
);

ProgressLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

ProgressLinks.defaultProps = {
  links: []
};

export default ProgressLinks;
