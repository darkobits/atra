import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Debug Toolbar ---------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'debugToolBar.background': gitHub.bgCanvas,
    'debugToolBar.border': gitHub.borderPrimary
  });
};
