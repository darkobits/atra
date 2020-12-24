import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Type-Related ----------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Type/Interface Names',
    settings: {
      foreground: gitHub.scaleYellow1
    },
    scope: [
      'support.type.object.console',
      'meta.entity.new.name.expr',
      'meta.namespace.declaration entity.name.type',
      'meta.type entity.name.type.alias',
      'meta.interface entity.name.type.interface',
      // Captures type names in Go, but may need to be made more specific if
      // it causes issues elsewhere.
      'source.go entity.name.type'
    ]
  });

  theme.tokenColors.add({
    name: 'Type Annotations',
    settings: {
      foreground: gitHub.scaleOrange5.alpha(0.72)
    },
    scope: [
      // 'meta.function meta.return.type',
      // This cannot be used because it includes any value that is new-ed.
      // 'entity.name.type.ts',
      'meta.function meta.type',
      'meta.function support.type',
      'meta.interface support.type',
      'meta.type entity.name.type',
      'meta.type support.type',
      'meta.type punctuation.definition',
      'meta.return.type',
      'meta.return.type variable.object.property',
      'meta.type.annotation variable.object.property',
      'meta.return.type keyword.operator',
      'keyword.operator.expression.typeof',
      'keyword.operator.expression.keyof'
    ]
  });

  theme.tokenColors.add({
    name: 'Global Namespace',
    settings: {
      foreground: gitHub.scaleBlue1.alpha(0.8)
    },
    scope: [
      // Captures "global" in "declare global" in d.ts files.
      'support.variable.object.node'
    ]
  });
};
