import { baseFontSize, breakpoints } from './settings';

export const rem = (...pxs) =>
  pxs
    .map(px => `${px / baseFontSize}rem`)
    .join(' ');

export const minWidth = key => `@media only screen and (min-width: ${breakpoints[key]}px)`;
