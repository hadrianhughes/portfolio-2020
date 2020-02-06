import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Item,
  IconPortion,
  TextPortion,
  Icon,
  ItemHeading,
  ItemDescription
} from './styles';

const FeaturedSkills = ({ skills }) => (
  <List>
    {
      skills.map((skill, index) =>
        <Item key={index}>
          <IconPortion>
            <Icon src={skill.icon} alt={skill.name} />
          </IconPortion>
          <TextPortion>
            <ItemHeading>{skill.name}</ItemHeading>
            <ItemDescription>{skill.description}</ItemDescription>
          </TextPortion>
        </Item>
      )
    }
  </List>
);

FeaturedSkills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
      description: PropTypes.string
    })
  )
};

FeaturedSkills.defaultProps = {
  skills: []
};

export default FeaturedSkills;
