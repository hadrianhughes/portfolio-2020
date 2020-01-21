import { baseFontSize, breakpoints } from './settings';

export const rem = px => `${px / baseFontSize}rem`;

export const minWidth = key => `@media only screen and (min-width: ${breakpoints[key]}px)`;
