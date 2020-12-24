import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Status Bar ------------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'statusBar.foreground': gitHub.textSecondary,
    'statusBar.background': gitHub.bgTertiary,

    // Colors when no folder is opened.
    'statusBar.noFolderForeground': gitHub.textSecondary,
    'statusBar.noFolderBackground': gitHub.bgTertiary,

    'statusBar.border': gitHub.borderPrimary,

    // Colors when debugging.
    'statusBar.debuggingForeground': gitHub.prStateOpenText,
    'statusBar.debuggingBackground': gitHub.prStateOpenBg,
    'statusBar.debuggingBorder': gitHub.prStateOpenBorder
  });
};
