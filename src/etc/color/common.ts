import { Color } from '@darkobits/vsct';
import gitHub from 'etc/color/github-dark';


/**
 * Common accent color used throughout the UI theme.
 */
export const accentColor = gitHub.scaleBlue4.alpha(0.8);

/**
 * Common purple used for syntax highlighting of various tokens.
 */
export const keywordPurple = gitHub.scalePurple3.alpha(0.72);

/**
 * Common orange used for syntax highlighting of various tokens.
 */
export const primitiveOrange = gitHub.scaleOrange4.alpha(1);

/**
 * Green used for string literals throughout the theme.
 */
export const stringLiteralGreen = gitHub.scaleGreen2.alpha(0.88);


export const seafoamGreen = gitHub.scaleGreen5.blue(128);


/**
 * Hot pink used for debugging.
 */
export const DEBUG_PINK = new Color('#FF00FF');


export const transparent = new Color('#000000').alpha(0);
