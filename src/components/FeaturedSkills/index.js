import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Item,
  IconPortion,
  TextPortion,
  Icon,
  ItemHeading,
  ItemDescription,
  OpenButton
} from './styles';

const FeaturedSkills = ({ skills, openSkill, onOpen }) => (
  <List>
    {
      skills.map((skill, index) =>
        <Item key={index}>
          <IconPortion>
            <Icon src={skill.icon} alt={skill.name} />
          </IconPortion>
          <TextPortion>
            <ItemHeading>
              <span>{skill.name}</span>
              <OpenButton onClick={onOpen(index)}>
                {openSkill === index ? '-' : '+'}
              </OpenButton>
            </ItemHeading>
            <ItemDescription open={openSkill === index}>{skill.description}</ItemDescription>
          </TextPortion>
        </Item>
      )
    }
  </List>
);

export const skillSchema = {
  name: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string
};

FeaturedSkills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape(skillSchema)
  ),
  openSkill: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null])
  ]),
  onOpen: PropTypes.func
};

FeaturedSkills.defaultProps = {
  skills: [],
  openSkill: null,
  onOpen: () => {}
};

export default FeaturedSkills;
