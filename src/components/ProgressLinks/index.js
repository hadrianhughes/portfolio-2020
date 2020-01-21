import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const ProgressLinks = ({ links }) => (
  <ul>
    {
      links.map(l =>
        <li key={l.href}>
          <Link href={l.href}>{l.text}</Link>
        </li>
      )
    }
  </ul>
);

ProgressLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

ProgressLinks.defaultProps = {
  links: []
};

export default ProgressLinks;
