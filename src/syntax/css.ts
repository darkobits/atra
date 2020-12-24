import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { primitiveOrange, stringLiteralGreen } from 'etc/color/common';
import gitHub from 'etc/color/github-dark';


// ----- CSS & Friends ---------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'SCSS/LESS Variables',
    settings: {
      foreground: gitHub.scaleRed3
    },
    scope: [
      'source.css.scss variable',
      'source.css.scss meta.definition.variable variable',
      'source.css.less variable',
      'source.css.less meta.definition.variable variable'
    ]
  });

  theme.tokenColors.add({
    name: 'SCSS Mixins/Functions',
    settings: {
      foreground: gitHub.scaleBlue3
    },
    scope: [
      'source.css.scss entity.name.function',
      'source.css.scss meta.at-rule support.function'
    ]
  });

  // Captures things like translateY() in CSS.
  theme.tokenColors.add({
    name: 'Support Functions',
    settings: {
      foreground: gitHub.scaleBlue3.alpha(0.7)
    },
    scope: 'support.function'
  });

  theme.tokenColors.add({
    name: 'Selector',
    settings: {
      foreground: gitHub.scalePurple4
    },
    scope: 'meta.selector'
  });

  theme.tokenColors.add({
    name: 'Units',
    settings: {
      foreground: primitiveOrange
    },
    scope: 'keyword.other.unit'
  });

  theme.tokenColors.add({
    name: 'Colors',
    settings: {
      foreground: gitHub.scaleGreen6.desaturate(0.64)
    },
    scope: 'constant.other.color'
  });

  theme.tokenColors.add({
    name: 'Attribute Selector String Literals',
    settings: {
      foreground: stringLiteralGreen
    },
    scope: [
      // Targets the string literal in: `data-name["foo"]`.
      'meta.attribute-selector'
    ]
  });

  theme.tokenColors.add({
    name: 'Attribute Selectors',
    settings: {
      foreground: gitHub.scaleGray2
    },
    scope: [
      'meta.attribute-selector entity.other.attribute-name.attribute',
      'meta.attribute-selector punctuation'
    ]
  });
};
