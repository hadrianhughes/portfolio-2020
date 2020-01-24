import React from 'react';
import PropTypes from 'prop-types';
import { H1, H2, Span } from './styles';
import { truthy } from '../../utils';

const Heading = ({ text, lines, main, animate }) => {
  const realLines = lines.filter(truthy);
  const HTag = main ? H1 : H2;

  return (
    <HTag main={main}>
      {
        realLines.length > 0 ?
          realLines.map((l, i) =>
            <Span
              key={l}
              length={l.length}
              index={i}
              main={main}
              animate={animate}>{l}</Span>
          )
          :
          <Span
            length={text.length}
            main={main}
            animate={animate}>{text}</Span>
      }
    </HTag>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  lines: PropTypes.arrayOf(PropTypes.string),
  main: PropTypes.bool,
  animate: PropTypes.bool
};

Heading.defaultProps = {
  text: '',
  lines: [],
  main: false,
  animate: false
};

export default Heading;
