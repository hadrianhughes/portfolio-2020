import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';

export const ScrollContext = React.createContext();

const SECTION_OFFSET = 200;

export const ScrollProvider = ({ sectionNames, children }) => {
  const [didInit, setDidInit] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionNames[0]);

  const sections = sectionNames.reduce((acc, name) => {
    const [ position, setter ] = useState(null);

    return {
      ...acc,
      [name]: { position, setter }
    };
  }, {});

  const getActiveSection = pos =>
    Object.keys(sections)
      .reduce((lastSection, key) =>
        pos >= sections[key].position - SECTION_OFFSET ? key : lastSection, sectionNames[0]
      );

  const handleScroll = () => {
    const newActiveSection = getActiveSection(window.scrollY);

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  const [debouncedHandleScroll] = useDebouncedCallback(handleScroll, 100);

  useEffect(() => {
    if (
      !didInit &&
      Object.keys(sections).every(key => typeof sections[key].position === 'number')
    ) {
      handleScroll();
      window.addEventListener('scroll', debouncedHandleScroll);
      setDidInit(true);
    }
  }, [sections]);

  const setSectionRef = (name, ref) => {
    const section = sections[name];

    if (section) {
      section.setter(ref.getBoundingClientRect().top + window.scrollY);
    }
  };

  const scrollTo = name => {
    const section = sections[name];
    if (section) {
      window.scrollTo({ top: section.position, behavior: 'smooth' });
    }
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
