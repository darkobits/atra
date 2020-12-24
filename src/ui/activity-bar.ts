import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';
import { accentColor } from 'etc/color/common';


// ----- Activity Bar ----------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'activityBar.background': gitHub.bgCanvas,
    'activityBar.foreground': accentColor,
    'activityBar.border': gitHub.borderPrimary,
    'activityBar.dropBackground': gitHub.borderPrimary,

    'activityBarBadge.background': gitHub.counterBg,
    'activityBarBadge.foreground': gitHub.textSecondary
  });
};
