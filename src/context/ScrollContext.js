import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export const ScrollContext = React.createContext();

const sectionRefs = ['home', 'skills'];

export const ScrollProvider = ({ children }) => {
  const refs = sectionRefs.reduce((acc, name) => ({ ...acc, [name]: useRef(null) }), {});

  const scrollTo = name => {
    refs[name].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ refs, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

ScrollProvider.propTypes = {
  children: PropTypes.node
};

ScrollProvider.defaultProps = {
  children: null
};
