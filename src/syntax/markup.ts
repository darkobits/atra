import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { DEBUG_PINK, primitiveOrange } from 'etc/color/common';
import gitHub from 'etc/color/github-dark';


// ----- Markup ----------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Tags',
    settings: {
      foreground: gitHub.scaleRed3
    },
    scope: 'entity.name.tag'
  });

  theme.tokenColors.add({
    name: 'Attributes',
    settings: {
      foreground: primitiveOrange
    },
    scope: 'entity.other.attribute-name'
  });

  theme.tokenColors.add({
    name: 'Attribute IDs',
    settings: {
      foreground: gitHub.scaleBlue3
    },
    scope: [
      'entity.other.attribute-name.id',
      'punctuation.definition.entity'
    ]
  });

  // Headings in Markdown, for example.
  theme.tokenColors.add({
    name: 'Headings',
    settings: {
      foreground: gitHub.scaleBlue3.alpha(0.8)
    },
    scope: [
      'markup.heading punctuation.definition.heading',
      'entity.name.section'
    ]
  });

  theme.tokenColors.add({
    name: 'Bold',
    settings: {
      fontStyle: {
        bold: true
      }
      // foreground: gitHub.scaleYellow1
    },
    scope: [
      'markup.bold',
      'punctuation.definition.bold'
    ]
  });

  theme.tokenColors.add({
    name: 'Italic',
    settings: {
      fontStyle: {
        italic: true
      }
      // foreground: gitHub.scalePurple4
    },
    scope: [
      'markup.italic',
      'punctuation.definition.italic'
    ]
  });

  theme.tokenColors.add({
    name: 'Code',
    settings: {
      // Note: Was green.
      foreground: DEBUG_PINK
    },
    scope: 'markup.raw.inline'
  });

  theme.tokenColors.add({
    name: 'Lists',
    settings: {
      foreground: gitHub.scaleRed3
    },
    scope: 'markup.list'
  });

  theme.tokenColors.add({
    name: 'Quotes',
    settings: {
      foreground: primitiveOrange
    },
    scope: 'markup.quote'
  });

  theme.tokenColors.add({
    name: 'Inserted',
    settings: {
      // Note: Was green.
      foreground: DEBUG_PINK
    },
    scope: [
      'markup.inserted',
      'markup.inserted.git_gutter'
    ]
  });

  theme.tokenColors.add({
    name: 'Deleted',
    settings: {
      foreground: gitHub.scaleRed3
    },
    scope: [
      'markup.deleted',
      'markup.deleted.git_gutter'
    ]
  });

  theme.tokenColors.add({
    name: 'Changed',
    settings: {
      foreground: gitHub.scalePurple4
    },
    scope: [
      'markup.changed',
      'markup.changed.git_gutter'
    ]
  });

  theme.tokenColors.add({
    name: 'Ignored',
    settings: {
      // Note: was gray4.
      foreground: DEBUG_PINK
    },
    scope: [
      'markup.ignored',
      'markup.ignored.git_gutter'
    ]
  });

  theme.tokenColors.add({
    name: 'Untracked',
    settings: {
      // Note: Was gray4.
      foreground: DEBUG_PINK
    },
    scope: [
      'markup.untracked',
      'markup.untracked.git_gutter'
    ]
  });
};
