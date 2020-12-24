import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { accentColor, DEBUG_PINK } from 'etc/color/common';
import gitHub from 'etc/color/github-dark';


// ----- Inputs ---------------------------------------------------------------

export default (theme: ThemeGenerator) => {
  /**
   * Note: The color that determines a focus input's border color is defined by
   * the 'focusBorder' color (see above).
   */
  theme.colors.add({
    'input.background': gitHub.bgPrimary,
    'input.foreground': gitHub.textPrimary,
    'input.border': gitHub.borderPrimary,
    'input.placeholderForeground': gitHub.textPlaceholder,

    // Contextual states.
    'inputValidation.infoBorder': DEBUG_PINK,
    'inputValidation.warningBorder': gitHub.alertWarnBorder,
    'inputValidation.errorBorder': gitHub.prStateClosedBorder,

    // Border color when options like case sensitivity or regular expression
    // mode are active in search fields.
    'inputOption.activeBorder': accentColor.alpha(0.8)
  });
};
