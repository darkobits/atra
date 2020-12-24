import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { stringLiteralGreen, seafoamGreen } from 'etc/color/common';


// ----- Strings ---------------------------------------------------------------

const verb = 'jumps';
void `The quick brown fox ${verb} over the lazy\ndog.`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Strings',
    settings: {
      // TODO: This approximates the base-16 green, but try to find a native
      // GitHub green that's a better fit.
      foreground: stringLiteralGreen.alpha(0.8)
    },
    scope: [
      // 'string.quoted.template',
      'constant.other.symbol',
      'string punctuation.support.type.property-name.begin',
      'string punctuation.support.type.property-name.end',
      'string.json support.type.property-name',
      'string.quoted',
      'string.quoted punctuation.definition.string.begin',
      'string.quoted punctuation.definition.string.end',
      'string.template',
      'string.template punctuation.definition.string.template.begin',
      'string.template punctuation.definition.string.template.end',
      'string.unquoted',
      // TextMate incorrectly reports that "&" is an illegal character in quoted
      // string literals in JSX (ex: HTML attributes).
      'meta.jsx string.quoted invalid.illegal.bad-ampersand'
    ]
  });

  theme.tokenColors.add({
    name: 'Interpolated Strings (Begin/End Tokens)',
    settings: {
      foreground: seafoamGreen.alpha(0.8)
    },
    scope: [
      'punctuation.definition.interpolation.begin',
      'punctuation.definition.interpolation.end',
      'string.quoted.template punctuation.quasi.element.begin',
      'string.quoted.template punctuation.quasi.element.end',
      'string.template punctuation.definition.template-expression.begin',
      'string.template punctuation.definition.template-expression.end'
    ]
  });

  // This helps escape characters subtly stand-out when used in green string
  // literals.
  theme.tokenColors.add({
    name: 'Escape Characters',
    settings: {
      foreground: seafoamGreen.alpha(0.8)
    },
    scope: 'constant.character.escape'
  });
};
