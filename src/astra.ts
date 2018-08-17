/**
 * ===== Astra =================================================================
 *
 * A VS Code theme heavily inspired by the Spacegray / Base 16 Ocean Dark themes
 * for VS Code and various other IDEs.
 *
 * Prior Art:
 * - https://github.com/ionutvmi/spacegray-vscode
 * - https://github.com/chriskempson/base16
 */
import Color from 'lib/color';

// Primary colors.
import {gray0, gray1, gray2, gray3, gray4, gray5, gray6, gray7, gray8} from 'etc/colors';

// Secondary colors.
import {black, green, red, orange, yellow, blue, purple, rust, seafoam} from 'etc/colors';

// Tertiary colors.
import {HOT_PINK, darkRed, white, transparent} from 'etc/colors';

import {AstraOptions} from 'etc/types';


export default ({accentColor, useItalic, modifyForeground, modifyBackground}: AstraOptions) => {
  const asForegroundColor = (color: Color): Color => modifyForeground ? modifyForeground(color) : color;
  const asBackgroundColor = (color: Color): Color => modifyBackground ? modifyBackground(color) : color;

  const theme: any = {tokenColors: []};


  // ===== Metadata ============================================================

  // theme.name = `Astra (${version})`;
  theme.colorSpaceName = 'sRGB';
  theme.author = 'darkobits';
  theme.semanticClass = 'darkobits.astra';
  theme.type = 'dark';


  // ===== Syntax-Highlighting =================================================

  theme.tokenColors.push({
    name: 'Text',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    scope: [
      'variable.parameter.function',
      'punctuation.accessor',
      'string.template support.variable.property',
      'string.template punctuation.definition.block',
      'string.template punctuation.terminator.statement'
    ]
  });

  theme.tokenColors.push({
    name: 'Function Calls',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    scope: [
      'meta.function-call',
      // Added to ensure correct highlighting of things like "process" in
      // certain situations. May cause issues.
      'support.type.object',
      'meta.method-call meta.function support.type.object',
      'meta.method-call entity.name.function',
      'entity.quasi meta.function-call',
      'string.template meta.function-call',
      'string.template variable.other'
    ]
  });

  theme.tokenColors.push({
    name: 'Function Parameters',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    scope: [
      'meta.parameters variable.parameter'
    ]
  });

  theme.tokenColors.push({
    name: 'Unquoted Object Keys',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    scope: [
      'constant.other.object.key string.unquoted',
      'constant.other.label'
    ]
  });

  theme.tokenColors.push({
    name: 'Comments',
    settings: {
      foreground: asForegroundColor(gray6).darken(0.28).desaturate(0.2)
    },
    scope: [
      'comment',
      'comment.block.documentation',
      'comment.block.documentation storage.type.class',
      'punctuation.definition.comment'
    ]
  });

  theme.tokenColors.push({
    name: 'Punctuation',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    scope: [
      'punctuation.definition.string',
      'punctuation.definition.variable',
      'punctuation.definition.string',
      'punctuation.definition.parameters',
      'punctuation.definition.string',
      'punctuation.definition.array'
    ]
  });

  theme.tokenColors.push({
    name: 'Braces & Parens',
    settings: {
      foreground: asForegroundColor(gray7).darken(0.2)
    },
    scope: [
      'meta.brace.curly',
      'meta.brace.square',
      'meta.brace.round'
    ]
  });

  theme.tokenColors.push({
    name: 'Delimiters',
    settings: {
      foreground: asForegroundColor(gray7)
    }
    // FIX THIS
    // scope: 'none'
  });

  theme.tokenColors.push({
    name: 'Operators',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    scope: 'keyword.operator'
  });

  theme.tokenColors.push({
    name: 'Keywords',
    settings: {
      foreground: asForegroundColor(purple),
      fontStyle: useItalic ? 'italic' : undefined
    },
    scope: [
      // This captures operators (defined above), so use more specific scopes.
      // 'keyword',
      // "of" in for-of loops. This *should* be italic.
      'keyword.operator.expression.of',
      'keyword.operator.expression.in',
      'keyword.import',
      'keyword.type',
      'keyword.function',
      'keyword.package',
      'keyword.struct'
    ]
  });

  theme.tokenColors.push({
    name: 'Control Flow',
    settings: {
      foreground: asForegroundColor(purple),
      fontStyle: useItalic ? 'italic' : undefined
    },
    scope: [
      'keyword.control'
    ]
  });

  theme.tokenColors.push({
    name: 'Variables',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    // Do not use the scope 'variable' here without additional specificity, as
    // it may inadvertently highlight JSDoc comments.
    scope: [
      'meta.definition variable',
      'variable.other.readwrite',
      'entity.quasi variable.other'
    ]
  });

  theme.tokenColors.push({
    name: 'Functions',
    settings: {
      foreground: asForegroundColor(blue)
    },
    scope: [
      // This includes method calls in classes, which we don't want.
      // 'entity.name.function',
      'meta.definition.method entity.name.function',
      'meta.definition.function entity.name.function',
      'meta.definition.variable entity.name.function',
      // This is too broad, as it will capture function calls, and we only
      // want function definitions to be captured by this rule.
      // 'meta.function entity.name.function',
      'meta.require',
      'support.function.any-method',
      'meta.function entity.name.function',

      // Function names in Go, because we can't use "entity.name.function".
      'source.go entity.name.function'
    ]
  });

  theme.tokenColors.push({
    name: 'Classes / Support',
    settings: {
      foreground: asForegroundColor(yellow)
    },
    scope: [
      'support.class',
      'support.type.object.console',
      'entity.name.type.class',
      // Captures type names in Go, but may need to be made more specific if
      // it causes issues elsewhere.
      'entity.name.type',
      'meta.entity.new.name.expr',
      'meta.namespcae.declaration'
    ]
  });

  theme.tokenColors.push({
    name: 'Methods',
    settings: {
      foreground: asForegroundColor(blue)
    },
    scope: [
      'keyword.other.special-method'
    ]
  });

  theme.tokenColors.push({
    name: 'Storage',
    settings: {
      foreground: asForegroundColor(purple),
      fontStyle: useItalic ? 'italic' : undefined
    },
    // Do not use 'storage' without a more specific scope here, as it may
    // inadvertently highlight JSDoc comments.
    scope: [
      'meta.var storage.type',
      'meta.class storage.modifier',
      'meta.class storage.type.class',
      'meta.function storage.type.function',
      'meta.function storage.modifier',
      'storage.type.function.arrow',
      'meta.interface storage.type.interface',
      'meta.type storage.type.type',
      'meta.namespace storage.type.namespace',
      // This scope captures the "declare" keyword in d.ts files.
      'storage.modifier',
      // Do *not* use 'storage.type' here without a more specific scope, as it
      // will apply to class constructors in TypeScript, possibly other
      // languages.
      // 'storage.type'

      // Storage in C/C++, ie "int".
      'storage.type.c',

      // Storage in Go.
      'source.go storage.type'
    ]
  });

  theme.tokenColors.push({
    name: 'Support',
    settings: {
      foreground: asForegroundColor(seafoam)
    },
    scope: 'support.function'
  });

  theme.tokenColors.push({
    name: 'Strings, Inherited Class',
    settings: {
      foreground: asForegroundColor(green).alpha(0.86)
    },
    scope: [
      // 'string.quoted.template',
      'string.quoted',
      'string.unquoted',
      'string.quoted punctuation.definition.string.begin',
      'string.quoted punctuation.definition.string.end',
      'string punctuation.support.type.property-name.begin',
      'string punctuation.support.type.property-name.end',
      'string.json support.type.property-name',
      'string.template',
      'constant.other.symbol',
      'entity.other.inherited-class'
    ]
  });

  theme.tokenColors.push({
    name: 'Interpolated Strings (Begin/End Tokens)',
    settings: {
      foreground: asForegroundColor(blue)
    },
    scope: [
      'string.quoted.template punctuation.quasi.element.begin',
      'string.quoted.template punctuation.quasi.element.end',
      'string.template punctuation.definition.template-expression.begin',
      'string.template punctuation.definition.template-expression.end'
    ]
  });

  theme.tokenColors.push({
    name: 'Numbers',
    settings: {
      foreground: asForegroundColor(orange)
    },
    scope: 'constant.numeric'
  });

  theme.tokenColors.push({
    name: 'Boolean',
    settings: {
      foreground: asForegroundColor(orange)
    },
    scope: 'constant.language.boolean'
  });

  theme.tokenColors.push({
    name: 'Constants',
    settings: {
      foreground: asForegroundColor(orange)
    },
    scope: 'constant.language'
  });

  theme.tokenColors.push({
    name: 'Tags',
    settings: {
      foreground: asForegroundColor(red)
    },
    scope: 'entity.name.tag'
  });

  theme.tokenColors.push({
    name: 'Attributes',
    settings: {
      foreground: asForegroundColor(orange)
    },
    scope: 'entity.other.attribute-name'
  });

  theme.tokenColors.push({
    name: 'Attribute IDs',
    settings: {
      foreground: asForegroundColor(blue)
    },
    scope: [
      'entity.other.attribute-name.id',
      'punctuation.definition.entity'
    ]
  });

  theme.tokenColors.push({
    name: 'Selector',
    settings: {
      foreground: asForegroundColor(purple)
    },
    scope: 'meta.selector'
  });

  theme.tokenColors.push({
    name: 'Headings',
    settings: {
      fontStyle: '',
      foreground: asForegroundColor(blue)
    },
    scope: [
      'markup.heading punctuation.definition.heading',
      'entity.name.section'
    ]
  });

  theme.tokenColors.push({
    name: 'Units',
    settings: {
      foreground: asForegroundColor(orange)
    },
    scope: 'keyword.other.unit'
  });

  theme.tokenColors.push({
    name: 'Bold',
    settings: {
      fontStyle: 'bold',
      foreground: asForegroundColor(yellow)
    },
    scope: [
      'markup.bold',
      'punctuation.definition.bold'
    ]
  });

  theme.tokenColors.push({
    name: 'Italic',
    settings: {
      fontStyle: 'italic',
      foreground: asForegroundColor(purple)
    },
    scope: [
      'markup.italic',
      'punctuation.definition.italic'
    ]
  });

  theme.tokenColors.push({
    name: 'Code',
    settings: {
      foreground: asForegroundColor(green)
    },
    scope: 'markup.raw.inline'
  });

  theme.tokenColors.push({
    name: 'Link Text',
    settings: {
      foreground: asForegroundColor(red)
    },
    scope: 'string.other.link'
  });

  theme.tokenColors.push({
    name: 'Link Url',
    settings: {
      foreground: asForegroundColor(orange)
    },
    scope: 'meta.link'
  });

  theme.tokenColors.push({
    name: 'Lists',
    settings: {
      foreground: asForegroundColor(red)
    },
    scope: 'markup.list'
  });

  theme.tokenColors.push({
    name: 'Quotes',
    settings: {
      foreground: asForegroundColor(orange)
    },
    scope: 'markup.quote'
  });

  theme.tokenColors.push({
    name: 'Separator',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    scope: 'meta.separator'
  });

  theme.tokenColors.push({
    name: 'Inserted',
    settings: {
      foreground: asForegroundColor(green)
    },
    scope: [
      'markup.inserted',
      'markup.inserted.git_gutter'
    ]
  });

  theme.tokenColors.push({
    name: 'Deleted',
    settings: {
      foreground: asForegroundColor(red)
    },
    scope: [
      'markup.deleted',
      'markup.deleted.git_gutter'
    ]
  });

  theme.tokenColors.push({
    name: 'Changed',
    settings: {
      foreground: asForegroundColor(purple)
    },
    scope: [
      'markup.changed',
      'markup.changed.git_gutter'
    ]
  });

  theme.tokenColors.push({
    name: 'Ignored',
    settings: {
      foreground: asForegroundColor(gray4)
    },
    scope: [
      'markup.ignored',
      'markup.ignored.git_gutter'
    ]
  });

  theme.tokenColors.push({
    name: 'Untracked',
    settings: {
      foreground: asForegroundColor(gray4)
    },
    scope: [
      'markup.untracked',
      'markup.untracked.git_gutter'
    ]
  });

  theme.tokenColors.push({
    name: 'Colors',
    settings: {
      foreground: asForegroundColor(seafoam)
    },
    scope: 'constant.other.color'
  });

  theme.tokenColors.push({
    name: 'Regular Expressions',
    settings: {
      foreground: asForegroundColor(seafoam)
    },
    scope: 'string.regexp'
  });

  theme.tokenColors.push({
    name: 'Escape Characters',
    settings: {
      foreground: asForegroundColor(seafoam)
    },
    scope: 'constant.character.escape'
  });

  theme.tokenColors.push({
    name: 'Embedded',
    settings: {
      foreground: asForegroundColor(rust)
    },
    scope: [
      'punctuation.section.embedded',
      'variable.interpolation'
    ]
  });

  theme.tokenColors.push({
    name: 'Invalid',
    settings: {
      foreground: asForegroundColor(white)
    },
    scope: 'invalid.illegal'
  });

  theme.tokenColors.push({
    name: 'This',
    settings: {
      foreground: asForegroundColor(darkRed),
      fontStyle: useItalic ? 'italic' : undefined
    },
    scope: 'variable.language.this'
  });

  theme.tokenColors.push({
    name: 'Type Names',
    settings: {
      foreground: asForegroundColor(yellow)
    },
    scope: [
      'meta.type entity.name.type.alias',
      'meta.interface entity.name.type.interface'
    ]
  });

  theme.tokenColors.push({
    name: 'Types',
    settings: {
      foreground: asForegroundColor(rust)
    },
    scope: [
      // 'meta.function meta.return.type',
      'meta.function meta.type',
      'meta.function support.type',
      'meta.interface support.type',
      'meta.type entity.name.type',
      'meta.type support.type',
      'meta.type punctuation.definition',
      'meta.return.type',
      'meta.return.type variable.object.property',
      'meta.type.annotation variable.object.property',
      'meta.return.type keyword.operator'
    ]
  });

  theme.tokenColors.push({
    name: 'Global Namespace',
    settings: {
      foreground: asForegroundColor(seafoam)
    },
    scope: [
      // Captures "global" in "declare global" in d.ts files.
      'support.variable.object.node'
    ]
  });


  // ===== Workbench Theme =====================================================

  theme.colors = {
    // ----- Base Colors -------------------------------------------------------

    'focusBorder': asForegroundColor(gray4),
    'foreground': asForegroundColor(gray7),
    'widget.shadow': asBackgroundColor(black).alpha(0.1),
    'selection.background': asBackgroundColor(gray6),
    'descriptionForeground': asForegroundColor(gray6),
    'errorForeground': asForegroundColor(red),
    'textSeparator.foreground': asForegroundColor(HOT_PINK),


    // ----- Text Colors -------------------------------------------------------

    'textBlockQuote.border': asBackgroundColor(orange),
    'textLink.foreground': asForegroundColor(blue),
    'textLink.activeForeground': asForegroundColor(gray8),


    // ----- Window Chrome -----------------------------------------------------

    'editorGroupHeader.tabsBackground': asBackgroundColor(gray0),
    'titleBar.inactiveBackground': asBackgroundColor(gray1),
    'titleBar.activeBackground': asBackgroundColor(gray1),
    'titleBar.border': asBackgroundColor(gray0),


    // ----- Editor Tabs -------------------------------------------------------

    'tab.border': asBackgroundColor(gray0),

    // Active tab.
    'tab.activeForeground': asForegroundColor(gray8),
    'tab.activeBackground': asBackgroundColor(gray1),

    // Optional active tab decoration.
    'tab.activeBorder': asBackgroundColor(gray1),
    'tab.activeBorderTop': asForegroundColor(accentColor),

    // Inactive tabs.
    'tab.inactiveForeground': asBackgroundColor(gray5),
    'tab.inactiveBackground': asBackgroundColor(gray0).lighten(0.32),


    // ----- Editor ------------------------------------------------------------

    'editor.foreground': asForegroundColor(gray7),
    'editor.background': asBackgroundColor(gray1),
    'editor.lineHighlightBackground': asBackgroundColor(gray5).alpha(0.06),
    'editorCursor.foreground': asForegroundColor(purple),
    'editorWhitespace.foreground': asForegroundColor(gray5),

    // Indent guides.
    'editorIndentGuide.background': asBackgroundColor(HOT_PINK),
    'editorIndentGuide.activeBackground': asBackgroundColor(HOT_PINK),

    // Rulers.
    'editorRuler.foreground': asBackgroundColor(gray3),

    // Links in Editor panes (not to be confused with text links, such as those
    // on the Welcome Page or Release Notes pages).
    'editorLink.activeForeground': asForegroundColor(accentColor),


    // ----- Editor - Token Highlighting ---------------------------------------

    // Background color when manually selecting text with the cursor.
    'editor.selectionBackground': asBackgroundColor(gray5).alpha(0.12),

    // Unable to produce this.
    'editor.selectionForeground': asForegroundColor(HOT_PINK),

    // 1. Background color applied to tokens in the current document matching
    //    the user's current selection, but *not* the token that the cursor is
    //    currently in.
    'editor.selectionHighlightBackground': asBackgroundColor(gray5).alpha(0.24),

    // This wil be the line highlight color of the line containing the current
    // active Find match, among other things. It should not be opaque.
    'editor.rangeHighlightBackground': asBackgroundColor(gray5).alpha(0.06),

    // 1. Background color applied to a selected block of text when the editor
    //    loses focus.
    // 2. Background color applied to a single slected token matching the
    //    current Find query (the user can iterate through matches using forward
    //    and backward arrows).
    'editor.inactiveSelectionBackground': asBackgroundColor(gray5).alpha(0.2),

    // Background color applied to the 'active' token matching the current Find
    // query.
    'editor.findMatchBackground': asBackgroundColor(gray5).alpha(0.06),

    // Background color applied to all 'inactive' tokens matching the current
    // Find query.
    'editor.findMatchHighlightBackground': asBackgroundColor(gray5).alpha(0.06),

    // 1. When the cursor is inside a symbol, this background color will be
    //    applied to all locations where that symbol is read-from. Note that
    //    *while* the user is selecting a block of text, 'selectionBackground'
    //    will be used.
    // 2. This may also be the background color applied to the symbol the
    //    cursor is currently inside of. (See 'selectionHighlightBackground')
    'editor.wordHighlightBackground': asBackgroundColor(gray5).alpha(0.06),

    // When the cursor is inside a symbol, this background color will be applied
    // to all locations where that symbol is written-to. Note that *while* the
    // user is selecting a block of text, 'selectionBackground' will be used.
    'editor.wordHighlightStrongBackground': asBackgroundColor(gray5).alpha(0.06),

    // Bracket-matching decoration.
    'editorBracketMatch.background': asBackgroundColor(gray5).alpha(0.32),
    'editorBracketMatch.border': asBackgroundColor(transparent),


    // ----- Editor - Squiggles ------------------------------------------------

    'editorError.foreground': asForegroundColor(red).alpha(0.48),
    'editorWarning.foreground': asForegroundColor(yellow).alpha(0.48),


    // ----- Editor Widgets ----------------------------------------------------

    'editorWidget.background': asBackgroundColor(gray0),
    'editorWidget.border': asBackgroundColor(gray3),
    'editorHoverWidget.background': asBackgroundColor(gray0),
    'editorHoverWidget.border': asBackgroundColor(gray3),


    // ----- Debug Toolbar -----------------------------------------------------

    'debugToolBar.background': asBackgroundColor(gray0),
    'debugToolBar.border': asBackgroundColor(gray2),


    // ----- Editor Groups -----------------------------------------------------

    'editorGroup.dropBackground': asBackgroundColor(gray1),
    'editorGroup.border': asBackgroundColor(gray3),
    'editorGroup.emptyBackground': asBackgroundColor(gray1),


    // ----- Gutter ------------------------------------------------------------

    'editorLineNumber.foreground': asForegroundColor(gray5).desaturate(0.08),
    'editorGutter.background': asBackgroundColor(gray1).darken(0.16), // ..desaturate(0.32),
    'editorGutter.modifiedBackground': asBackgroundColor(purple).alpha(0.6),
    'editorGutter.addedBackground': asBackgroundColor(green).alpha(0.6),
    'editorGutter.deletedBackground': asBackgroundColor(red).alpha(0.6),


    // ----- Panels (Terminal, etc.) -------------------------------------------

    'panel.background': asBackgroundColor(gray0),
    'panel.dropBackground': asBackgroundColor(gray2),
    'panel.border': asBackgroundColor(gray0),

    // Panel titles (tabs).
    'panelTitle.activeForeground': asForegroundColor(gray8),
    'panelTitle.activeBorder': asForegroundColor(accentColor),
    'panelTitle.inactiveForeground': asBackgroundColor(gray5),


    // ----- Activity Bar (Far Left or Far Right) ------------------------------

    'activityBar.foreground': asBackgroundColor(gray5),
    'activityBar.background': asBackgroundColor(gray1),
    'activityBar.border': asBackgroundColor(gray0),
    'activityBar.dropBackground': asBackgroundColor(gray2),

    // Badges.
    'activityBarBadge.foreground': asBackgroundColor(gray8),
    'activityBarBadge.background': asForegroundColor(accentColor),


    // ----- Side Bar (Adjacent to Activity Bar) -------------------------------

    // This color also controls the command palette dropdown.
    'sideBar.foreground': asForegroundColor(gray4).lighten(0.16),
    'sideBar.background': asBackgroundColor(gray0).lighten(0.12).desaturate(0.08),
    'sideBar.border': asBackgroundColor(gray0),

    'sideBarSectionHeader.background': asBackgroundColor(gray1),
    'sideBarSectionHeader.foreground': asForegroundColor(gray7),

    'sideBarTitle.foreground': asForegroundColor(gray6),

    // Drop background when chaning the order of entire sidebar sections (not
    // items in an individual sidebar panel).
    'sideBar.dropBackground': '#23283050', // FIXME


    // ----- Status Bar (Bottom) -----------------------------------------------

    'statusBar.foreground': asBackgroundColor(gray6),
    'statusBar.background': asBackgroundColor(gray1),

    // Colors when no folder is opened.
    'statusBar.noFolderForeground': asBackgroundColor(gray6),
    'statusBar.noFolderBackground': asBackgroundColor(gray1),

    'statusBar.border': asBackgroundColor(gray2),

    // Colors when debugging.
    'statusBar.debuggingForeground': asBackgroundColor(green).alpha(0.86),
    'statusBar.debuggingBackground': asBackgroundColor(gray1),
    'statusBar.debuggingBorder': asBackgroundColor(gray2),


    // ----- Scroll Bars -------------------------------------------------------

    // Drop shadow applied to any view to indicate that it has been scrolled.
    'scrollbar.shadow': asBackgroundColor(black).alpha(0.1),

    // Highlight applied to scroll bars and the minimap scroller on the active
    // editor group.
    'scrollbarSlider.background': asBackgroundColor(gray2),
    'scrollbarSlider.hoverBackground': asBackgroundColor(gray3),
    'scrollbarSlider.activeBackground': asBackgroundColor(gray3),


    // ----- Badges (Non Activity Bar) -----------------------------------------

    'badge.background': asForegroundColor(accentColor),
    'badge.foreground': asBackgroundColor(gray8),


    // ----- Lists & Trees -----------------------------------------------------

    // Selected item when the list/tree is blurred.
    'list.inactiveSelectionForeground': asForegroundColor(gray7),
    'list.inactiveSelectionBackground': asBackgroundColor(gray2),

    // Selected item when the list/tree has focus.
    'list.activeSelectionForeground': asForegroundColor(gray8),
    'list.activeSelectionBackground': asBackgroundColor(gray2),

    // Focused/selected item.
    'list.focusForeground': asForegroundColor(gray8),
    'list.focusBackground': asBackgroundColor(gray2),

    // Hovered item.
    'list.hoverForeground': asForegroundColor(gray8),
    'list.hoverBackground': asBackgroundColor(gray1),

    // Dropdown background color.
    'list.dropBackground': asBackgroundColor(gray1),

    // Contextual states.
    'list.errorForeground': asForegroundColor(red).desaturate(0.3).darken(0.2),
    'list.warningForeground': asForegroundColor(yellow).desaturate(0.6).darken(0.2),

    'list.highlightForeground': asForegroundColor(accentColor),

    // Surprisingly, this color is used for notification backgrounds when one
    // of the notifications buttons (OK/Cancel) is being clicked.
    'list.inactiveFocusBackground': asBackgroundColor(gray1),


    // ----- Peek Views --------------------------------------------------------

    'peekView.border': asBackgroundColor(gray4),
    'peekViewEditor.background': asBackgroundColor(gray1),
    'peekViewTitle.background': asBackgroundColor(gray1),
    'peekViewResult.background': '#191B21', // FIXME
    'peekViewEditor.matchHighlightBackground': asBackgroundColor(gray5).alpha(0.12),
    'peekViewResult.matchHighlightBackground': asBackgroundColor(gray5).alpha(0.12),
    'peekViewResult.selectionBackground': asBackgroundColor(gray5).alpha(0.12),


    // ----- Notifications -----------------------------------------------------

    'notifications.foreground': asForegroundColor(gray7),
    'notifications.background': asBackgroundColor(gray1),

    'notificationCenterHeader.foreground': asForegroundColor(gray7),
    'notificationCenterHeader.background': asBackgroundColor(gray1),

    'notificationLink.foreground': asForegroundColor(gray1),
    'notificationCenter.border': asBackgroundColor(gray3),
    'notificationToast.border': asBackgroundColor(gray3),
    'notifications.border': asBackgroundColor(gray3),


    // ----- Dropdowns ---------------------------------------------------------

    'dropdown.background': asBackgroundColor(gray1),
    'dropdown.border': asBackgroundColor(gray2),


    // ----- Inputs ------------------------------------------------------------

    'input.foreground': asForegroundColor(gray7),
    'input.background': asBackgroundColor(gray1),
    'input.border': asBackgroundColor(gray3),
    'input.placeholderForeground': asBackgroundColor(gray5),

    // Contextual states.
    'inputValidation.errorBorder': asBackgroundColor(red),
    'inputValidation.warningBorder': asBackgroundColor(yellow),
    'inputValidation.infoBorder': asBackgroundColor(blue),

    'inputOption.activeBorder': asBackgroundColor(green),


    // ----- Buttons -----------------------------------------------------------

    'button.foreground': asForegroundColor(gray8),
    'button.background': asBackgroundColor(accentColor).saturate(0.12).darken(0.22),
    'button.hoverBackground': asBackgroundColor(accentColor).saturate(0.08).darken(0.08),


    // ----- Git Colors --------------------------------------------------------

    // Color for modified Git resources. Used for file labels and the SCM
    // viewlet.
    'gitDecoration.modifiedResourceForeground': asForegroundColor(purple).desaturate(0.5).darken(0.3),

    // Color for deleted Git resources. Used for file labels and the SCM
    // viewlet.
    'gitDecoration.deletedResourceForeground': asForegroundColor(red).desaturate(0.3).darken(0.2),

    // Color for untracked Git resources. Used for file labels and the SCM
    // viewlet.
    'gitDecoration.untrackedResourceForeground': asForegroundColor(green).desaturate(0.5).darken(0.3),

    // Color for ignored Git resources. Used for file labels and the SCM
    // viewlet.
    'gitDecoration.ignoredResourceForeground': asForegroundColor(gray3),

    // Color for conflicting Git resources. Used for file labels and the SCM
    // viewlet.
    'gitDecoration.conflictingResourceForeground': asForegroundColor(red).desaturate(0.3).darken(0.2)

    // Color for submodule resources.
    // 'gitDecoration.submoduleResourceForeground': ''
  };


  return theme;
};
