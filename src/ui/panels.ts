import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { accentColor } from 'etc/color/common';
import gitHub from 'etc/color/github-dark';


// ----- Panels (Terminal, etc.) -----------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'panel.background': gitHub.bgCanvas,
    'panel.dropBackground': gitHub.bgCanvas,

    // This is the border between panels and other elements, but also the border
    // between multiple panels, such as multiple terminal panes.
    'panel.border': gitHub.borderPrimary,

    // Panel titles (tabs).
    'panelTitle.activeForeground': gitHub.textPrimary,

    // Underline accent for the active panel tab.
    'panelTitle.activeBorder': accentColor,
    'panelTitle.inactiveForeground': gitHub.textSecondary
  });
};
