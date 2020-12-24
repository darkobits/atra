import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { accentColor } from 'etc/color/common';


// ----- Buttons ---------------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'button.background': accentColor.darken(0.8),
    'button.foreground': accentColor,
    'button.hoverBackground': accentColor.darken(0.75)
  });
};
