/**
 * ===== Astra =================================================================
 *
 * A VS Code theme based on the GitHub Dark theme.
 *
 * Reference:
 * https://vscode.readthedocs.io/en/latest/getstarted/theme-color-reference
 *
 * See Also:
 * - https://gist.github.com/lol-russo/1c7a0b958be4b9434c5a120f24d5e7c3
 *
 */
import env from '@darkobits/env';
import ThemeFactory from '@darkobits/vsct';

import syntaxClasses from 'syntax/classes';
import syntaxComments from 'syntax/comments';
import syntaxCss from 'syntax/css';
import syntaxFunctions from 'syntax/functions';
import syntaxKeywords from 'syntax/keywords';
import syntaxMarkup from 'syntax/markup';
import syntaxMisc from 'syntax/misc';
import syntaxPrimitives from 'syntax/primitives';
import syntaxPunctuation from 'syntax/punctuation';
import syntaxStrings from 'syntax/strings';
import syntaxText from 'syntax/text';
import syntaxTypes from 'syntax/types';

import uiActivityBar from 'ui/activity-bar';
import uiBadges from 'ui/badges';
import uiBase from 'ui/base';
import uiButtons from 'ui/buttons';
import uiDebugToolbar from 'ui/debug-toolbar';
import uiDropdowns from 'ui/dropdowns';
import uiEditor from 'ui/editor';
import uiGutter from 'ui/gutter';
import uiInputs from 'ui/inputs';
import uiLists from 'ui/lists';
import uiNotifications from 'ui/notifications';
import uiPanels from 'ui/panels';
import uiPeekViews from 'ui/peek-views';
import uiScm from 'ui/scm';
import uiScrollBars from 'ui/scroll-bars';
import uiSideBar from 'ui/side-bar';
import uiStatusBar from 'ui/status-bar';
import uiText from 'ui/text';
import uiWindowChrome from 'ui/window-chrome';


export default ThemeFactory(theme => {
  const useItalic = true;
  const useDevTag = env.eq('IS_PUBLISH', false);

  theme.set('label', `Astra${useDevTag ? ' (Dev)' : ''}`);
  theme.set('uiTheme', 'vs-dark');

  syntaxClasses(theme, useItalic);
  syntaxComments(theme, useItalic);
  syntaxCss(theme, useItalic);
  syntaxFunctions(theme, useItalic);
  syntaxKeywords(theme, useItalic);
  syntaxMarkup(theme, useItalic);
  syntaxMisc(theme, useItalic);
  syntaxPrimitives(theme, useItalic);
  syntaxPunctuation(theme, useItalic);
  syntaxStrings(theme, useItalic);
  syntaxText(theme, useItalic);
  syntaxTypes(theme, useItalic);

  uiActivityBar(theme);
  uiBadges(theme);
  uiBase(theme);
  uiButtons(theme);
  uiDebugToolbar(theme);
  uiDropdowns(theme);
  uiEditor(theme);
  uiGutter(theme);
  uiInputs(theme);
  uiLists(theme);
  uiNotifications(theme);
  uiPanels(theme);
  uiPeekViews(theme);
  uiScm(theme);
  uiScrollBars(theme);
  uiSideBar(theme);
  uiStatusBar(theme);
  uiText(theme);
  uiWindowChrome(theme);
});
