import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../components/Heading';
import FeaturedSkills from '../../components/FeaturedSkills/FeaturedSkillsContainer';
import SkillsCloud from '../../components/SkillsCloud';
import PageHOC from '../../components/Page/PageHOC';

const Skills = ({ context }) => (
  <Fragment>
    <Heading text={context.heading} />
    <FeaturedSkills skills={context.featuredSkills} />
    <SkillsCloud skills={context.skills} />
  </Fragment>
);

Skills.propTypes = {
  context: PropTypes.object
};

Skills.defaultProps = {
  context: {}
};

export default PageHOC('skills')(Skills);
