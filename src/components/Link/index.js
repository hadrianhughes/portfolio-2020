import React, { useContext } from 'react';
import { ScrollContext } from '../../context/ScrollContext';
import PropTypes from 'prop-types';

const Link = ({ href, className, children }) => {
  const { scrollTo } = useContext(ScrollContext);

  const handleClick = e => {
    if (/^#.+$/.test(href)) {
      e.preventDefault();
      scrollTo(href.substr(1));
    }
  };

  return (
    <a
      onClick={handleClick}
      href={href}
      className={className}>{children}</a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

Link.defaultProps = {
  href: '',
  className: '',
  children: null
};

export default Link;
