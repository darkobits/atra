import Color from '../lib/color';


// ----- Canonical Colors ------------------------------------------------------

export const green = new Color('#A3BE8C');
export const red = new Color('#BF616A');
export const orange = new Color('#D08770');
export const yellow = new Color('#EBCB8B');
export const blue = new Color('#8FA1B3');
export const purple = new Color('#B48EAD');
export const rust = new Color('#AB7967');
export const seafoam = new Color('#96B5B4');

export const gray1 = new Color('#232830');
export const gray2 = new Color('#343D46');
export const gray3 = new Color('#4F5B66');
export const gray4 = new Color('#65737E');
export const gray5 = new Color('#A7ADBA');
export const gray6 = new Color('#C0C5CE');
export const gray7 = new Color('#EFF1F5');


// ----- Other Colors ----------------------------------------------------------

export const black = new Color('#000000');
export const white = new Color('#FFFFFF');
export const transparent = black.alpha(0);

export const darkRed = red.desaturate(0.04).darken(0.27);

export const darkGray1 = new Color('#13151A');
export const darkGray2 = new Color('#17191F');
export const darkGray3 = new Color('#1C1F26');

// Used for debugging.
export const HOT_PINK = new Color('#FF00FF');
