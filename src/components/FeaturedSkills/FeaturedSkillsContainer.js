import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FeaturedSkills from './index';
import { skillSchema } from './index';

const FeaturedSkillsContainer = ({ skills }) => {
  const [openSkill, setOpenSkill] = useState(null);

  const handleOpen = index => () => setOpenSkill(openSkill === index ? null : index);

  return (
    <FeaturedSkills
      skills={skills}
      openSkill={openSkill}
      onOpen={handleOpen} />
  );
};

FeaturedSkillsContainer.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape(skillSchema)
  )
};

FeaturedSkillsContainer.defaultProps = {
  skills: []
};

export default FeaturedSkillsContainer;
