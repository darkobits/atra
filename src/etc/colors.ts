import Color from '../lib/color';


const LIGHTEN_COEFFICIENT = 0;


// ----- Canonical Colors ------------------------------------------------------

export const green = new Color({
  h: 92, s: 28, l: 65
}).lighten(LIGHTEN_COEFFICIENT);

export const red = new Color({
  h: 354, s: 42, l: 56
}).lighten(LIGHTEN_COEFFICIENT);

export const orange = new Color({
  h: 14, s: 51, l: 63
}).lighten(LIGHTEN_COEFFICIENT);

export const yellow = new Color({
  h: 40, s: 71, l: 73
}).lighten(LIGHTEN_COEFFICIENT);

export const blue = new Color({
  h: 210, s: 19, l: 63
}).lighten(LIGHTEN_COEFFICIENT);

export const purple = new Color({
  h: 311, s: 20, l: 63
}).lighten(LIGHTEN_COEFFICIENT);

export const rust = new Color({
  h: 16, s: 29, l: 54
}).lighten(LIGHTEN_COEFFICIENT);

export const seafoam = new Color({
  h: 178, s: 17, l: 65
}).lighten(LIGHTEN_COEFFICIENT);

export const gray1 = new Color({
  h: 217, s: 16, l: 16
}).lighten(LIGHTEN_COEFFICIENT);

export const gray2 = new Color({
  h: 210, s: 15, l: 24
}).lighten(LIGHTEN_COEFFICIENT);

export const gray3 = new Color({
  h: 209, s: 13, l: 35
}).lighten(LIGHTEN_COEFFICIENT);

export const gray4 = new Color({
  h: 206, s: 11, l: 45
}).lighten(LIGHTEN_COEFFICIENT);

export const gray5 = new Color({
  h: 221, s: 12, l: 69
}).lighten(LIGHTEN_COEFFICIENT);

export const gray6 = new Color({
  h: 219, s: 13, l: 78
}).lighten(LIGHTEN_COEFFICIENT);

export const gray7 = new Color({
  h: 220, s: 23, l: 95
}).lighten(LIGHTEN_COEFFICIENT);


// ----- Other Colors ----------------------------------------------------------

export const black = new Color({
  h: 0, s: 0, l: 0
}).lighten(LIGHTEN_COEFFICIENT);

export const white = new Color({
  h: 0, s: 100, l: 100
}).lighten(LIGHTEN_COEFFICIENT);

export const transparent = black.alpha(0).lighten(LIGHTEN_COEFFICIENT);

export const darkRed = red.desaturate(0.04).darken(0.27).lighten(LIGHTEN_COEFFICIENT);

export const darkGray1 = new Color({
  h: 223, s: 16, l: 9
}).lighten(LIGHTEN_COEFFICIENT);

export const darkGray2 = new Color({
  h: 225, s: 15, l: 11
}).lighten(LIGHTEN_COEFFICIENT);

export const darkGray3 = new Color({
  h: 222, s: 15, l: 13
}).lighten(LIGHTEN_COEFFICIENT);

// Used for debugging.
export const HOT_PINK = new Color({
  h: 300, s: 100, l: 50
});
