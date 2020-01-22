import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ScrollContext = React.createContext();

export const ScrollProvider = ({ sectionNames, children }) => {
  const [activeSection, setActiveSection] = useState(sectionNames[0]);

  const sections = sectionNames.reduce((acc, name) => {
    const [ el, setter ] = useState(null);

    return {
      ...acc,
      [name]: { el, setter }
    };
  }, {});

  const handleIntersect = sectionName => entries => {
    const [ intersection ] = entries;

    if (intersection.isIntersecting) {
      setActiveSection(sectionName);
    }
  };

  const observers = sectionNames.reduce((acc, name) => {
    const observer = new IntersectionObserver(handleIntersect(name), {
      threshold: 0.8
    });

    return {
      ...acc,
      [name]: observer
    };
  }, {});

  const setSectionRef = (name, ref) => {
    const section = sections[name];
    if (section) {
      section.setter(ref);

      observers[name].disconnect();
      observers[name].observe(ref);
    }
  };

  const scrollTo = name => {
    const section = sections[name];
    if (section) section.el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ setSectionRef, scrollTo, activeSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

ScrollProvider.propTypes = {
  sectionNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node
};

ScrollProvider.defaultProps = {
  sectionNames: ['home'],
  children: null
};
