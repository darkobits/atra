import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { DEBUG_PINK } from 'etc/color/common';
import gitHub from 'etc/color/github-dark';

// ----- Notifications ---------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'notifications.foreground': gitHub.textPrimary,
    'notifications.background': gitHub.bgCanvas,
    'notifications.border': gitHub.borderPrimary,

    'notification.buttonBackground':  DEBUG_PINK, //  gitHub.bgCanvas,
    'notification.buttonHoverBackground': gitHub.bgCanvas,

    'notificationCenterHeader.foreground': gitHub.textPrimary,
    'notificationCenterHeader.background': gitHub.bgCanvas,
    'notificationCenter.border': gitHub.borderPrimary,

    'notificationLink.foreground': gitHub.textPrimary,
    'notificationToast.border': gitHub.borderPrimary
  });

};
