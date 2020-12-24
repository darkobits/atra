import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Functions -------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Functions',
    settings: {
      foreground: gitHub.scaleBlue3.alpha(0.8)
    },
    scope: [
      // The scope 'entity.name.function' targets method calls in classes, which
      // we don't want to target here, hence the more specific scoping.
      'meta.definition.method entity.name.function',
      'meta.definition.function entity.name.function',
      'meta.definition.variable entity.name.function',
      'meta.function entity.name.function',
      'support.function.any-method',
      'meta.require',
      // Function names in Go, because we can't use 'entity.name.function'.
      'source.go entity.name.function'
    ]
  });

  theme.tokenColors.add({
    name: 'Function Calls',
    settings: {
      foreground: gitHub.scaleGray1
    },
    scope: [
      'meta.function-call',
      'meta.function-call entity.name.function',
      'meta.method-call meta.function support.type.object',
      'meta.method-call entity.name.function',
      'entity.quasi meta.function-call',
      'string.template meta.function-call',
      'string.template variable.other',
      // Added to ensure correct highlighting of things like "process" (Node) in
      // certain situations. May cause issues.
      'support.type.object'
    ]
  });

  theme.tokenColors.add({
    name: 'Function Parameters',
    settings: {
      foreground: gitHub.scaleGray2
    },
    scope: [
      'meta.parameters variable.parameter'
    ]
  });
};
