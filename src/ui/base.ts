import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Base Colors -----------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    // Overall foreground color. This color is only used if not overridden by a
    // component.
    'foreground': gitHub.textPrimary,

    // Overall border color for focused elements. This color is only used if not
    // overridden by a component.
    //
    // Ideally we would use accentColor here, but this results in a very "loud"
    // border for panels, and the VS Code team seems unwilling to allow inputs
    // and panels to have different focus border colors.
    //
    // See: https://github.com/microsoft/vscode/issues/79968
    'focusBorder': gitHub.borderPrimary.lighten(0.32),
    'widget.shadow': gitHub.bgCanvas.alpha(0.12),
    'selection.background': gitHub.textSecondary.lighten(0.24),
    'errorForeground': gitHub.textDanger
  });
};
