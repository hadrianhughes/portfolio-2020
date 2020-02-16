import React from 'react';
import { ItemSchema } from './index';

import {
  Display,
  DisplayHeader,
  DisplayHeading,
  HeadingIcon,
  DisplayDetails,
  Screenshot
} from './styles';

const GalleryDisplay = ({
  title,
  details,
  link,
  extraIcon,
  extraIconAlt,
  image
}) => (
  <Display>
    <DisplayHeader>
      <DisplayHeading>{title}</DisplayHeading>
      {
        extraIcon ?
          <HeadingIcon src={extraIcon} alt={extraIconAlt} />
          :
          null
      }
    </DisplayHeader>
    {
      details.map((d, i) => <DisplayDetails key={i}>{d}</DisplayDetails>)
    }
    {
      image ?
        (() => {
          const ScreenshotWithProps = <Screenshot src={image} alt={`Screenshot of ${title}`} />;

          if (link) {
            return (
              <a href={link} rel="noopener noreferrer" target="_blank">{ScreenshotWithProps}</a>
            );
          }

          return ScreenshotWithProps;
        })()
        :
        null
    }
  </Display>
);

GalleryDisplay.propTypes = ItemSchema;

GalleryDisplay.defaultProps = {
  link: '',
  extraIcon: '',
  extraIconAlt: '',
  image: ''
};

export default GalleryDisplay;
