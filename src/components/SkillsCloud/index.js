import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  List,
  PrimaryItem,
  SecondaryItem,
  ExpandButton
} from './styles';

const SkillsCloud = ({ skills }) => {
  const [isPreview, setPreview] = useState(true);

  const filterLevel = level => s => s.level === level;

  const primary = skills.filter(filterLevel(1));
  const secondary = skills.filter(filterLevel(2));

  const mapItem = Tag => skill => <Tag key={skill.name}>{skill.name}</Tag>;

  return (
    <Wrapper>
      <List preview={isPreview}>
        {primary.map(mapItem(PrimaryItem))}
        {secondary.map(mapItem(SecondaryItem))}
      </List>
      <ExpandButton
        onClick={() => setPreview(!isPreview)}
        collapsed={isPreview}>
        Expand
      </ExpandButton>
    </Wrapper>
  );
};

SkillsCloud.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired
    })
  )
};

SkillsCloud.defaultProps = {
  skills: []
};

export default SkillsCloud;
