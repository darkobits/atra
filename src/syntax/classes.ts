import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Classes ---------------------------------------------------------------

void class TestClass extends Array {
  private readonly _bar: string;

  constructor() {
    super();
    this._bar = 'baz';
  }

  bar() {
    return this._bar;
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Classes / Support',
    settings: {
      foreground: gitHub.scaleYellow1
    },
    scope: [
      'support.class',
      'entity.name.type.class',
      'entity.other.inherited-class'
    ]
  });

  theme.tokenColors.add({
    name: 'Methods',
    settings: {
      foreground: gitHub.scaleBlue3
    },
    scope: [
      'keyword.other.special-method'
    ]
  });

  theme.tokenColors.add({
    name: 'This',
    settings: {
      foreground: gitHub.scaleRed6,
      fontStyle: {
        italic: useItalic
      }
    },
    scope: 'variable.language.this'
  });
};
