import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Window Chrome ---------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'titleBar.inactiveBackground': gitHub.bgCanvas.lighten(0.16),
    'titleBar.activeBackground': gitHub.bgCanvas,
    'titleBar.border': gitHub.bgTertiary
  });
};
