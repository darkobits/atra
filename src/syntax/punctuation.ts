import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Punctuation, Delimiters, Operators, Braces ----------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Punctuation',
    settings: {
      foreground: gitHub.scaleGray2
    },
    scope: [
      'punctuation.definition.string',
      'punctuation.definition.variable',
      'punctuation.definition.string',
      'punctuation.definition.parameters',
      'punctuation.definition.string',
      'punctuation.definition.array',
      'meta.interface meta.object.type punctuation.definition.block'
    ]
  });

  theme.tokenColors.add({
    name: 'Braces & Parens',
    settings: {
      // TODO: Darken?
      foreground: gitHub.scaleGray2
    },
    scope: [
      'meta.brace.curly',
      'meta.brace.square',
      'meta.brace.round'
    ]
  });

  // theme.tokenColors.add({
  //   name: 'Delimiters',
  //   settings: {
  //     foreground: asForegroundColor(gray7)
  //   }
  //   // FIX THIS
  //   // scope: 'none'
  // });

  theme.tokenColors.add({
    name: 'Operators',
    settings: {
      foreground: gitHub.scaleGray2
    },
    scope: 'keyword.operator'
  });

  theme.tokenColors.add({
    name: 'Unquoted Object Keys',
    settings: {
      foreground: gitHub.scaleGray2
    },
    scope: [
      'constant.other.object.key string.unquoted',
      'constant.other.label'
    ]
  });

  theme.tokenColors.add({
    name: 'Separator',
    settings: {
      foreground: gitHub.scaleGray2
    },
    scope: 'meta.separator'
  });
};
