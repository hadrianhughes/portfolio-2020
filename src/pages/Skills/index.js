import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import Page from '../../components/Page';
import Heading from '../../components/Heading';
import FeaturedSkills from '../../components/FeaturedSkills';
import SkillsCloud from '../../components/SkillsCloud';

const Skills = ({ context }) => {
  const ref = useRef();
  const { activeSection, setSectionRef } = useContext(ScrollContext);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setSectionRef('skills', ref.current);
  }, []);

  useEffect(() => {
    if (activeSection === 'skills' && !entered) {
      setEntered(true);
    }
  }, [activeSection]);

  return (
    <Page id="skills" theRef={ref}>
      <Heading text={context.heading} animate={entered} />
      <FeaturedSkills skills={context.featuredSkills} />
      <SkillsCloud skills={context.skills} />
    </Page>
  );
};

Skills.propTypes = {
  context: PropTypes.object
};

Skills.defaultProps = {
  context: {}
};

export default Skills;
