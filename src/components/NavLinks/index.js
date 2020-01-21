import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import { List, Item, StyledLink } from './styles';

const NavLinks = ({ links }) => {
  const { scrollTo } = useContext(ScrollContext);

  return (
    <List>
      {
        links.map(l =>
          <Item key={l.href}>
            <StyledLink
              href={l.href}
              onClick={e => scrollTo(e, l.href.substr(1))}>{l.text}</StyledLink>
          </Item>
        )
      }
    </List>
  );
};

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
