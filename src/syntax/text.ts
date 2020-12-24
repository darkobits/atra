import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Text & Other Foreground -----------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Text',
    settings: {
      foreground: gitHub.scaleGray1,
      fontStyle: {
        italic: false
      }
    },
    // These scopes contain a few very specific selectors to 'revert' tokens to
    // being highlighted as text in certain contexts.
    scope: [
      'variable.parameter.function',
      'punctuation.accessor',
      'string.template support.variable.property',
      'string.template punctuation.definition.block',
      'string.template punctuation.terminator.statement',
      'string.template meta.object-literal.key',
      'meta.interface meta.field.declaration variable.object.property',
      'source.yaml keyword.control',
      'source.yaml storage.modifier'
    ]
  });

  theme.tokenColors.add({
    name: 'Variables',
    settings: {
      foreground: gitHub.scaleGray1
    },
    scope: [
      // Do not use the scope 'variable' here without additional specificity, as
      // it may inadvertently highlight JSDoc comments.
      'meta.definition variable',
      'variable.other.readwrite',
      'entity.quasi variable.other',
      // Target variable names in interpolated string literals in CSS-in-JS
      // contexts.
      'meta.embedded.line variable.other.constant'
    ]
  });
};
