import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { primitiveOrange, seafoamGreen } from 'etc/color/common';
import gitHub from 'etc/color/github-dark';


// ----- Miscellany ----------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Link Text',
    settings: {
      foreground: gitHub.scaleRed3
    },
    scope: 'string.other.link'
  });

  theme.tokenColors.add({
    name: 'Link URL',
    settings: {
      foreground: primitiveOrange
    },
    scope: 'meta.link'
  });


  // Note: This no longer appears to be a valid scope; console is now scoped the
  // same as any other object function call.
  theme.tokenColors.add({
    name: 'Console',
    settings: {
      foreground: gitHub.scaleYellow1
    },
    scope: 'support.type.object.console'
  });

  theme.tokenColors.add({
    name: 'Embedded',
    settings: {
      foreground: gitHub.scaleOrange5
    },
    scope: [
      'punctuation.section.embedded',
      'variable.interpolation'
    ]
  });

  theme.tokenColors.add({
    name: 'Invalid',
    settings: {
      foreground: gitHub.scaleWhite
    },
    scope: 'invalid.illegal'
  });


  // ----- Exotics / One-Offs --------------------------------------------------

  // eslint-disable-next-line @typescript-eslint/no-extra-parens
  void (/\w+\D/g);

  theme.tokenColors.add({
    name: 'Regular Expressions',
    settings: {
      foreground: seafoamGreen
    },
    scope: [
      'string.regexp',
      'string.regexp punctuation.definition.string.begin',
      'string.regexp punctuation.definition.string.end',
      'string.regexp keyword.operator'
    ]
  });
};
