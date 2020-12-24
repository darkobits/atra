import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Text Colors -----------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'textBlockQuote.border': gitHub.alertWarnBorder,
    'textLink.foreground': gitHub.topicTagText,
    'textLink.activeForeground': gitHub.topicTagText
  });
};
