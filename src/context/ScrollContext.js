import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ScrollContext = React.createContext();

const sectionNames = ['home', 'skills'];

export const ScrollProvider = ({ children }) => {
  const sections = sectionNames.reduce((acc, name) => {
    const [ value, setter ] = useState(null);

    return {
      ...acc,
      [name]: { value, setter }
    };
  }, {});

  const setSectionRef = (name, ref) => {
    const section = sections[name];
    if (section) section.setter(ref);
  };

  const scrollTo = name => {
    const section = sections[name];
    if (section) section.value.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ setSectionRef, scrollTo }}>
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
