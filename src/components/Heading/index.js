import React from 'react';
import PropTypes from 'prop-types';
import { H1, H2, Span } from './styles';
import { truthy } from '../../utils';

const Heading = ({ text, lines, main }) => {
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
              main={main}>{l}</Span>
          )
          :
          <Span length={text.length} main={main}>{text}</Span>
      }
    </HTag>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  lines: PropTypes.arrayOf(PropTypes.string),
  main: PropTypes.bool
};

Heading.defaultProps = {
  text: '',
  lines: [],
  main: false
};

export default Heading;
