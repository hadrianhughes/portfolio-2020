import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Photo, Paragraph } from './styles';

const Profile = ({ paragraphs }) => (
  <Wrapper>
    <Photo src="/img/profile.jpg" alt="Hadrian's Profile" />
    {
      paragraphs.map((text, index) => <Paragraph key={index}>{text}</Paragraph>)
    }
  </Wrapper>
);

Profile.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string)
};

Profile.defaultProps = {
  paragraphs: []
};

export default Profile;
