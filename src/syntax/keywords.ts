import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { keywordPurple } from 'etc/color/common';


// ----- Keywords & Other Control Flow -----------------------------------------

export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Keywords',
    settings: {
      foreground: keywordPurple,
      fontStyle: {
        italic: useItalic
      }
    },
    scope: [
      'keyword.operator.expression.of',
      'keyword.operator.expression.in',
      'keyword.operator.expression.void',
      'keyword.import',
      'keyword.type',
      'keyword.function',
      'keyword.package',
      'keyword.struct',
      'meta.enum.declaration storage.type.enum',
      // Covers most other kinds of control flow tokens.
      'keyword.control'
    ]
  });

  theme.tokenColors.add({
    name: 'Storage',
    settings: {
      foreground: keywordPurple,
      fontStyle: {
        italic: useItalic
      }
    },
    scope: [
      // Do not use 'storage' without a more specific scope here, as it may
      // inadvertently highlight JSDoc comments. Additionally, do not use
      // 'storage.type' here without a more specific scope, as it will apply to
      // class constructors in TypeScript, possibly other languages.
      'meta.var storage.type',
      'meta.class storage.modifier',
      'meta.class storage.type.class',
      'meta.function storage.type.function',
      'meta.function storage.modifier',
      'meta.interface storage.type.interface',
      'meta.type storage.type.type',
      'meta.namespace storage.type.namespace',
      // This scope captures the "declare" keyword in d.ts files.
      'storage.modifier',
      // Storage in C/C++, ie "int".
      'storage.type.c',
      // Storage in Go.
      'source.go storage.type'
    ]
  });

  theme.tokenColors.add({
    name: 'Fat Arrows',
    settings: {
      foreground: keywordPurple
    },
    scope: [
      'storage.type.function.arrow'
    ]
  });
};
