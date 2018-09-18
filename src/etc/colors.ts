/**
 * ===== Astra Color Palette ===================================================
 *
 * - Canonical colors are derived from the Base-16 color palette.
 * - Grays are loosely-based on the Base-16 grays.
 */
import {Color} from '@darkobits/vsct';


// ----- Canonical Colors ------------------------------------------------------

export const green = new Color({
  h: 4 * 22, s: 4 * 10, l: 4 * 18
});

export const red = new Color({
  h: 4 * 88, s: 4 * 10, l: 4 * 16
});

export const orange = new Color({
  h: 4 * 4, s: 4 * 13, l: 4 * 16
});

export const yellow = new Color({
  h: 4 * 10, s: 4 * 18, l: 4 * 18
});

export const blue = new Color({
  h: 4 * 54, s: 4 * 6, l: 4 * 16
});

export const purple = new Color({
  h: 4 * 78, s: 4 * 5, l: 4 * 16
});

export const rust = new Color({
  h: 4 * 4, s: 4 * 7, l: 4 * 13
});

export const seafoam = new Color({
  h: 4 * 44, s: 4 * 4, l: 4 * 16
});


// ----- Grays -----------------------------------------------------------------

export const gray0 = new Color({
  h: 4 * 54, s: 4 * 4, l: 4 * 2
});

export const gray1 = new Color({
  h: 4 * 54, s: 4 * 4, l: 4 * 3
});

export const gray2 = new Color({
  h: 4 * 54, s: 4 * 4, l: 4 * 4
});

export const gray3 = new Color({
  h: 4 * 54, s: 4 * 4, l: 4 * 6
});

export const gray4 = new Color({
  h: 4 * 54, s: 4 * 4, l: 4 * 8
});

export const gray5 = new Color({
  h: 4 * 54, s: 4 * 4, l: 4 * 10
});

export const gray6 = new Color({
  h: 4 * 54, s: 4 * 4, l: 4 * 16
});

export const gray7 = new Color({
  h: 4 * 54, s: 4 * 4, l: 4 * 22
});

export const gray8 = new Color({
  h: 4 * 54, s: 4 * 4, l: 4 * 28
});


// ----- Other Colors ----------------------------------------------------------

export const black = new Color({
  h: 0, s: 0, l: 0
});

export const white = new Color({
  h: 0, s: 100, l: 100
});

export const transparent = black.alpha(0);

export const darkRed = red.desaturate(0.04).darken(0.27);

// Used for debugging.
export const HOT_PINK = new Color({
  h: 4 * 75, s: 4 * 25, l: 4 * 12
});
