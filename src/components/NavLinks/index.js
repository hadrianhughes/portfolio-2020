import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, List, Item, StyledLink } from './styles';

const NavLinks = ({ links }) => (
  <Wrapper>
    <List>
      {
        links
          .filter(l => !l.noHomePage)
          .map(l =>
          <Item key={l.href}>
            <StyledLink href={l.href}>{l.text}</StyledLink>
          </Item>
        )
      }
    </List>
  </Wrapper>
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
