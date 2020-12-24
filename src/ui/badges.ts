import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Badges ----------------------------------------------------------------

export default (theme: ThemeGenerator) => {
  /**
   * Note: These colors only apply to badges that appear outside of the activity
   * bar.
   */
  theme.colors.add({
    'badge.foreground': gitHub.textDanger,
    'badge.background': gitHub.prStateClosedBorder
  });
};
