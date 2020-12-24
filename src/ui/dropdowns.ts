import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Dropdowns -------------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'dropdown.background': gitHub.bgCanvas,
    'dropdown.border': gitHub.borderPrimary
  });
};
