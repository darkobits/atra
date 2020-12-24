import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- Comments ------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (theme: ThemeGenerator, useItalic: boolean) => {
  theme.tokenColors.add({
    name: 'Comments',
    settings: {
      foreground: gitHub.scaleBlue2.desaturate(0.2).alpha(0.42)
    },
    scope: [
      'comment',
      'comment.block.documentation',
      'comment.block.documentation storage.type.class',
      'punctuation.definition.comment',
      'comment entity.name.type'
    ]
  });
};
