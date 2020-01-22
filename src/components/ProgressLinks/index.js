import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import { Nav, List, Item, StyledLink } from './styles';

const ProgressLinks = ({ links }) => {
  const { activeSection } = useContext(ScrollContext);

  return (
    <Nav>
      <List>
        {
          links.map(l =>
            <Item key={l.href}>
              <StyledLink
                href={l.href}
                active={activeSection === l.name}>{l.text}</StyledLink>
            </Item>
          )
        }
      </List>
    </Nav>
  );
};

ProgressLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

ProgressLinks.defaultProps = {
  links: []
};

export default ProgressLinks;
