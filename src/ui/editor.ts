import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';
import { accentColor, transparent } from 'etc/color/common';
import gitHub from 'etc/color/github-dark';


// ----- Editor Colors ---------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'editor.foreground': gitHub.textPrimary,
    'editor.background': gitHub.bgCanvas.lighten(0.16),
    'editor.lineHighlightBackground': gitHub.bgOverlay.alpha(0.42),
    'editorCursor.foreground': accentColor.alpha(0.64),

    // Whitespace characters. Sometimes only shown in selected text.
    'editorWhitespace.foreground': gitHub.textSecondary.alpha(0.24),

    // Indent guides.
    'editorIndentGuide.background': gitHub.counterBg.alpha(0.24),
    'editorIndentGuide.activeBackground': gitHub.counterBg.alpha(0.64),

    // Rulers.
    'editorRuler.foreground': gitHub.counterBg.alpha(0.32),

    // Links in Editor panes (not to be confused with text links, such as those
    // on the Welcome Page or Release Notes pages).
    'editorLink.activeForeground': accentColor
  });


  // ----- Tabs ----------------------------------------------------------------

  theme.colors.add({
    'tab.border': gitHub.bgTertiary,

    // Active tab.
    'tab.activeForeground': gitHub.textPrimary,
    'tab.activeBackground': gitHub.bgTertiary,

    // Optional active tab decoration.
    'tab.activeBorder': gitHub.bgTertiary,
    'tab.activeBorderTop': accentColor,

    // Inactive tabs.
    'tab.inactiveForeground': gitHub.textSecondary,
    'tab.inactiveBackground': gitHub.bgTertiary.darken(0.16)
  });


  // ----- Token Highlighting --------------------------------------------------

  theme.colors.add({
    // Background color when manually selecting text with the cursor.
    // TODO: Provide instructions to reproduce.
    // 'editor.selectionBackground': gitHub.bgOverlay.alpha(0.64),
    'editor.selectionBackground': accentColor.alpha(0.12),

    // Unable to produce this. May be related to:
    // https://github.com/Microsoft/vscode/issues/36490
    // https://github.com/Microsoft/vscode/issues/34105
    // 'editor.selectionForeground': DEBUG_PINK,

    // Color for regions with the same content as the selection.
    // NOTE: Disabled; VS Code will use wordHighlightBackground instead.
    // 'editor.selectionHighlightBackground': DEBUG_PINK,

    // - When the cursor is inside a symbol, this background color will be
    //   applied to all locations where that symbol is read-from. Note that
    //   *while* the user is selecting a block of text, 'selectionBackground'
    //   will be used.
    // - Background color applied to the symbol the cursor is currently inside
    //   of and/or selected (See 'selectionHighlightBackground')
    // 'editor.wordHighlightBackground': gitHub.bgTertiary.lighten(0.8),
    'editor.wordHighlightBackground': gitHub.bgOverlay.alpha(0.8),

    // This wil be the line highlight color of the line containing the current
    // active Find match, among other things. It should not be opaque.
    'editor.rangeHighlightBackground': gitHub.bgOverlay.alpha(0.64),

    // - Background color applied to a selected block of text when the editor
    //   loses focus.
    // - Cannot reproduce this: Background color applied to a single selected
    //   token matching the current Find query (the user can iterate through
    //   matches using forward and backward arrows).
    'editor.inactiveSelectionBackground': gitHub.bgTertiary.lighten(0.2),

    // Background color applied to the 'active' token matching the current Find
    // query.
    'editor.findMatchBackground': gitHub.bgOverlay.alpha(0.8),

    // Background color applied to all 'inactive' tokens matching the current
    // Find query.
    'editor.findMatchHighlightBackground': gitHub.bgTertiary.lighten(0.64),

    // When the cursor is inside a symbol, this background color will be applied
    // to all locations where that symbol is written-to. Note that *while* the
    // user is selecting a block of text, 'selectionBackground' will be used.
    'editor.wordHighlightStrongBackground': gitHub.bgTertiary.lighten(0.4),

    // Bracket-matching decoration.
    'editorBracketMatch.background': gitHub.bgTertiary.lighten(0.4),
    'editorBracketMatch.border': transparent
  });


  // ----- Squiggles -----------------------------------------------------------

  theme.colors.add({
    'editorError.foreground': gitHub.textDanger.alpha(0.42).desaturate(0.42),
    'editorWarning.foreground': gitHub.textWarning.alpha(0.64)
  });


  // ----- Widgets -------------------------------------------------------------

  // The Editor widget is shown in front of the editor content. Examples are the
  // Find/Replace dialog, IntelliSense, and the Command Palette.
  theme.colors.add({
    'editorWidget.background': gitHub.bgCanvas,
    'editorWidget.border': gitHub.borderPrimary,
    'editorHoverWidget.background': gitHub.bgCanvas,
    'editorHoverWidget.border': gitHub.borderPrimary
  });


  // ----- Groups --------------------------------------------------------------

  theme.colors.add({
    // Only visible when multiple editor groups are active.
    'editorGroup.border': gitHub.borderPrimary,
    'editorGroup.dropBackground': gitHub.bgCanvas.alpha(0.8),
    'editorGroup.emptyBackground': gitHub.bgCanvas,

    'editorGroupHeader.tabsBackground': gitHub.bgTertiary.darken(0.28)
  });
};
