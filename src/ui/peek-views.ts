import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { accentColor } from 'etc/color/common';
import gitHub from 'etc/color/github-dark';


// ----- Peek Views ------------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'peekView.border': gitHub.topicTagBorder,
    'peekViewEditor.background': gitHub.topicTagBg,
    'peekViewTitle.background': gitHub.bgCanvas,

    // Right-side pane in Peek views.
    'peekViewResult.background': gitHub.topicTagBg.lighten(0.12),
    'peekViewResult.matchHighlightBackground': accentColor,
    'peekViewResult.selectionBackground': accentColor,

    // Selection highlight background of other references to a symbol when using
    // things like Peek References.
    'peekViewEditor.matchHighlightBackground': accentColor
  });
};
