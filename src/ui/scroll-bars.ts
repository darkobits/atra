import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Scroll Bars -----------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    // Drop shadow applied to any view to indicate that it has been scrolled.
    'scrollbar.shadow': gitHub.bgCanvas,  // .alpha(0.5),

    // Highlight applied to scroll bars and the minimap scroller on the active
    // editor group.
    'scrollbarSlider.background': gitHub.bgTertiary.alpha(0.8),
    'scrollbarSlider.hoverBackground': gitHub.bgTertiary.lighten(0.16).alpha(0.8),
    'scrollbarSlider.activeBackground': gitHub.bgTertiary.lighten(0.16).alpha(0.8)
  });
};
