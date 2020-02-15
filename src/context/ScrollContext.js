import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import { getElementPosition } from '../utils';

export const ScrollContext = React.createContext();

const SECTION_OFFSET = 200;

export const ScrollProvider = ({ sectionNames, children }) => {
  const [didInit, setDidInit] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionNames[0]);

  const sections = sectionNames.reduce((acc, name) => {
    const [ el, setter ] = useState(null);

    return {
      ...acc,
      [name]: { el, setter }
    };
  }, {});

  const getActiveSection = pos =>
    Object.keys(sections)
      .reduce((lastSection, key) =>
        pos >= getElementPosition(sections[key].el) - SECTION_OFFSET ? key : lastSection, sectionNames[0]
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
      Object.keys(sections).every(key => sections[key].el !== null)
    ) {
      handleScroll();
      window.addEventListener('scroll', debouncedHandleScroll);
      setDidInit(true);
    }
  }, [sections]);

  const setSectionRef = (name, ref) => {
    const section = sections[name];

    if (section) {
      section.setter(ref);
    }
  };

  const scrollTo = name => {
    const section = sections[name];
    if (section) {
      window.scrollTo({ top: getElementPosition(section.el), behavior: 'smooth' });
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
