import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Side Bar --------------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    // This color also controls the command palette dropdown.
    'sideBar.foreground': gitHub.textPrimary.alpha(0.8),
    'sideBar.background': gitHub.bgCanvas,
    'sideBar.border': gitHub.borderPrimary,

    'sideBarSectionHeader.background': gitHub.bgTertiary,
    'sideBarSectionHeader.foreground': gitHub.textSecondary,

    // Example: "EXPLORER" at top.
    'sideBarTitle.foreground': gitHub.textSecondary,

    // Drop background when changing the order of entire sidebar sections (not
    // items in an individual sidebar panel).
    'sideBar.dropBackground': gitHub.bgTertiary
  });
};
