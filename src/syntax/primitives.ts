import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { primitiveOrange } from 'etc/color/common';


// ----- Primitives ------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Numbers',
    settings: {
      foreground: primitiveOrange
    },
    scope: 'constant.numeric'
  });

  theme.tokenColors.add({
    name: 'Boolean',
    settings: {
      foreground: primitiveOrange
    },
    scope: 'constant.language.boolean'
  });

  theme.tokenColors.add({
    name: 'Constants',
    settings: {
      foreground: primitiveOrange
    },
    scope: 'constant.language'
  });
};
