import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import gitHub from 'etc/color/github-dark';


// ----- SCM Colors ------------------------------------------------------------

export default (theme: ThemeGenerator) => {
  /**
   * These colors are used in the Explorer sidebar to highlight files based on
   * their contextual state. They are also used in the SCM sidebar.
   */
  theme.colors.add({
    // Color for modified Git resources. Used for file labels and the SCM
    // viewlet.
    'gitDecoration.modifiedResourceForeground': gitHub.scalePurple4.alpha(0.8),

    // Color for deleted Git resources. Used for file labels and the SCM
    // viewlet.
    'gitDecoration.deletedResourceForeground': gitHub.textDanger.desaturate(0.16),

    // Color for untracked Git resources. Used for file labels and the SCM
    // viewlet.
    'gitDecoration.untrackedResourceForeground': gitHub.textSuccess.desaturate(0.32),

    // Color for ignored Git resources. Used for file labels and the SCM
    // viewlet.
    'gitDecoration.ignoredResourceForeground': gitHub.textPlaceholder,

    // Color for conflicting Git resources. Used for file labels and the SCM
    // viewlet.
    'gitDecoration.conflictingResourceForeground': gitHub.textDanger

    // Color for submodule resources.
    // 'gitDecoration.submoduleResourceForeground': ''
  });
};
