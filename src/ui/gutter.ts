import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Gutter --------------------------------------------------------------

export default (theme: ThemeGenerator) => {

  theme.colors.add({
    // Note: Where/what is the color definition for the active line number in
    // the gutter?
    'editorLineNumber.foreground': gitHub.textPlaceholder,
    'editorGutter.background': gitHub.bgCanvas,

    // Contextual SCM states for each line.
    'editorGutter.modifiedBackground': gitHub.prStateMergedBorder,
    'editorGutter.addedBackground': gitHub.prStateOpenBorder,
    'editorGutter.deletedBackground': gitHub.prStateClosedBorder
  });
};
