import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ScrollContext } from '../../context/ScrollContext';
import Page from '../../components/Page';
import Heading from '../../components/Heading';
import FeaturedSkills from '../../components/FeaturedSkills';
import SkillsCloud from '../../components/SkillsCloud';

const Skills = ({ context }) => {
  const ref = useRef();
  const { setSectionRef } = useContext(ScrollContext);

  useEffect(() => {
    setSectionRef('skills', ref.current);
  }, []);

  return (
    <Page id="skills" theRef={ref}>
      <Heading text={context.heading} />
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
