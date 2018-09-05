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
import {AstraOptions, LooseObject} from 'etc/types';
import Color from 'lib/color';
import merge from 'lib/merge';


// ----- Colors ----------------------------------------------------------------

// Primary colors.
import {gray0, gray1, gray2, gray3, gray4, gray5, gray6, gray7, gray8} from 'etc/colors';

// Secondary colors.
import {black, green, red, orange, yellow, blue, purple, rust, seafoam} from 'etc/colors';

// Tertiary colors.
import {HOT_PINK, darkRed, white, transparent} from 'etc/colors';


export default ({accentColor, useItalic, modifyForeground, modifyBackground}: AstraOptions) => {
  const asForegroundColor = (color: Color): Color => modifyForeground ? modifyForeground(color) : color;
  const asBackgroundColor = (color: Color): Color => modifyBackground ? modifyBackground(color) : color;

  const theme: LooseObject = {tokenColors: [], colors: {}};


  // ===== Metadata ============================================================

  theme.colorSpaceName = 'sRGB';
  theme.author = 'darkobits';
  theme.semanticClass = 'darkobits.astra';
  theme.type = 'dark';


  // ===== Syntax-Highlighting =================================================


  // ----- Text & Other Foreground ---------------------------------------------

  theme.tokenColors.push({
    name: 'Text',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    // These scopes contain a few very specific selectors to 'revert' tokens to
    // being highlighted as text in certain situtaions, such as inside
    // interpolated string literals.
    scope: [
      'variable.parameter.function',
      'punctuation.accessor',
      'string.template support.variable.property',
      'string.template punctuation.definition.block',
      'string.template punctuation.terminator.statement',
      'string.template meta.object-literal.key',
      // Resets the 'content' attribute in CSS rules.
      'source.css meta.property-list entity.name.tag'
    ]
  });

  theme.tokenColors.push({
    name: 'Variables',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    scope: [
      // Do not use the scope 'variable' here without additional specificity, as
      // it may inadvertently highlight JSDoc comments.
      'meta.definition variable',
      'variable.other.readwrite',
      'entity.quasi variable.other'
    ]
  });


  // ----- Functions -----------------------------------------------------------

  theme.tokenColors.push({
    name: 'Functions',
    settings: {
      foreground: asForegroundColor(blue)
    },
    scope: [
      // The scope 'entity.name.function' targets method calls in classes, which
      // we don't want to target here, hence the more specific scoping.
      'meta.definition.method entity.name.function',
      'meta.definition.function entity.name.function',
      'meta.definition.variable entity.name.function',
      'meta.function entity.name.function',
      'support.function.any-method',
      'meta.require',
      // Function names in Go, because we can't use 'entity.name.function'.
      'source.go entity.name.function'
    ]
  });

  theme.tokenColors.push({
    name: 'Function Calls',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    scope: [
      'meta.function-call',
      'meta.function-call entity.name.function',
      'meta.method-call meta.function support.type.object',
      'meta.method-call entity.name.function',
      'entity.quasi meta.function-call',
      'string.template meta.function-call',
      'string.template variable.other',
      // Added to ensure correct highlighting of things like "process" (Node) in
      // certain situations. May cause issues.
      'support.type.object'
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


  // ----- Primitives ----------------------------------------------------------

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


  // ----- Strings -------------------------------------------------------------

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
      'constant.other.symbol'
    ]
  });

  theme.tokenColors.push({
    name: 'Interpolated Strings (Begin/End Tokens)',
    settings: {
      foreground: asForegroundColor(blue)
    },
    scope: [
      'punctuation.definition.interpolation.begin',
      'punctuation.definition.interpolation.end',
      'string.quoted.template punctuation.quasi.element.begin',
      'string.quoted.template punctuation.quasi.element.end',
      'string.template punctuation.definition.template-expression.begin',
      'string.template punctuation.definition.template-expression.end'
    ]
  });


  // ----- Classes -------------------------------------------------------------

  theme.tokenColors.push({
    name: 'Classes / Support',
    settings: {
      foreground: asForegroundColor(yellow)
    },
    scope: [
      'support.class',
      'entity.name.type.class'
    ]
  });

  theme.tokenColors.push({
    name: 'Inherited Class',
    settings: {
      foreground: asForegroundColor(green).alpha(0.86)
    },
    scope: [
      'entity.other.inherited-class'
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


  // ----- Keywords & Other Control Flow ---------------------------------------

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
      'keyword.struct',
      // Covers most other kinds of control flow tokens.
      'keyword.control'
    ]
  });

  theme.tokenColors.push({
    name: 'Storage',
    settings: {
      foreground: asForegroundColor(purple),
      fontStyle: useItalic ? 'italic' : undefined
    },
    scope: [
      // Do not use 'storage' without a more specific scope here, as it may
      // inadvertently highlight JSDoc comments. Additionally, do not use
      // 'storage.type' here without a more specific scope, as it will apply to
      // class constructors in TypeScript, possibly other languages.
      'meta.var storage.type',
      'meta.class storage.modifier',
      'meta.class storage.type.class',
      'meta.function storage.type.function',
      'meta.function storage.modifier',
      'meta.interface storage.type.interface',
      'meta.type storage.type.type',
      'meta.namespace storage.type.namespace',
      'storage.type.function.arrow',
      // This scope captures the "declare" keyword in d.ts files.
      'storage.modifier',
      // Storage in C/C++, ie "int".
      'storage.type.c',
      // Storage in Go.
      'source.go storage.type'
    ]
  });


  // ----- Punctuation, Delimiters, Operators, Braces --------------------------

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
    name: 'Separator',
    settings: {
      foreground: asForegroundColor(gray7)
    },
    scope: 'meta.separator'
  });


  // ----- Markup-Related ------------------------------------------------------

  theme.tokenColors.push({
    name: 'Tags',
    settings: {
      foreground: asForegroundColor(red).saturate(0.16)
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
    name: 'Headings',
    settings: {
      foreground: asForegroundColor(blue)
    },
    scope: [
      'markup.heading punctuation.definition.heading',
      'entity.name.section'
    ]
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


  // ----- CSS-Related ---------------------------------------------------------

  theme.tokenColors.push({
    name: 'SCSS/LESS Variables',
    settings: {
      foreground: asForegroundColor(red)
    },
    scope: [
      'source.css.scss variable',
      'source.css.scss meta.definition.variable variable',
      'source.css.less variable',
      'source.css.less meta.definition.variable variable'
    ]
  });

  theme.tokenColors.push({
    name: 'SCSS Mixins/Functions',
    settings: {
      foreground: asForegroundColor(blue)
    },
    scope: [
      'source.css.scss entity.name.function',
      'source.css.scss meta.at-rule support.function'
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
    name: 'Units',
    settings: {
      foreground: asForegroundColor(orange)
    },
    scope: 'keyword.other.unit'
  });

  theme.tokenColors.push({
    name: 'Colors',
    settings: {
      foreground: asForegroundColor(seafoam)
    },
    scope: 'constant.other.color'
  });


  // ----- Exotics / One-Offs --------------------------------------------------

  theme.tokenColors.push({
    name: 'Regular Expressions',
    settings: {
      foreground: asForegroundColor(seafoam)
    },
    scope: 'string.regexp'
  });

  // This helps escape characters subtly stand-out when used in green string
  // literals.
  theme.tokenColors.push({
    name: 'Escape Characters',
    settings: {
      foreground: asForegroundColor(seafoam)
    },
    scope: 'constant.character.escape'
  });

  // Make 'this' references visually loud.
  theme.tokenColors.push({
    name: 'This',
    settings: {
      foreground: asForegroundColor(darkRed),
      fontStyle: useItalic ? 'italic' : undefined
    },
    scope: 'variable.language.this'
  });


  // ----- Comments ------------------------------------------------------------

  theme.tokenColors.push({
    name: 'Comments',
    settings: {
      foreground: asForegroundColor(gray6).darken(0.28).desaturate(0.2)
    },
    scope: [
      'comment',
      'comment.block.documentation',
      'comment.block.documentation storage.type.class',
      'punctuation.definition.comment',
      'comment entity.name.type'
    ]
  });


  // ----- Miscellany ----------------------------------------------------------

  theme.tokenColors.push({
    name: 'Support',
    settings: {
      foreground: asForegroundColor(seafoam)
    },
    scope: 'support.function'
  });

  theme.tokenColors.push({
    name: 'Link Text',
    settings: {
      foreground: asForegroundColor(red)
    },
    scope: 'string.other.link'
  });

  theme.tokenColors.push({
    name: 'Link URL',
    settings: {
      foreground: asForegroundColor(orange)
    },
    scope: 'meta.link'
  });

  theme.tokenColors.push({
    name: 'Console',
    settings: {
      foreground: asForegroundColor(yellow)
    },
    scope: [
      'support.type.object.console'
    ]
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


  // ----- Type-Related --------------------------------------------------------

  theme.tokenColors.push({
    name: 'Type/Interface Names',
    settings: {
      foreground: asForegroundColor(yellow)
    },
    scope: [
      'support.type.object.console',
      'meta.entity.new.name.expr',
      'meta.namespcae.declaration',
      'meta.type entity.name.type.alias',
      'meta.interface entity.name.type.interface',
      // Captures type names in Go, but may need to be made more specific if
      // it causes issues elsewhere.
      'source.go entity.name.type'
    ]
  });

  theme.tokenColors.push({
    name: 'Type Annotations',
    settings: {
      foreground: asForegroundColor(rust)
    },
    scope: [
      // 'meta.function meta.return.type',
      // This cannot be used because it includes any value that is new-ed.
      // 'entity.name.type.ts',
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


  // ----- Base Colors ---------------------------------------------------------

  merge(theme.colors, {
    'focusBorder': asBackgroundColor(gray4).alpha(0.2),
    'foreground': asForegroundColor(gray7),
    'widget.shadow': asBackgroundColor(black).alpha(0.1),
    'selection.background': asBackgroundColor(gray6),
    'descriptionForeground': asForegroundColor(gray6),
    'errorForeground': asForegroundColor(red),
    'textSeparator.foreground': asForegroundColor(HOT_PINK)
  });


  // ----- Text Colors ---------------------------------------------------------

  merge(theme.colors, {
    'textBlockQuote.border': asBackgroundColor(orange),
    'textLink.foreground': asForegroundColor(blue),
    'textLink.activeForeground': asForegroundColor(gray8)
  });


  // ----- Window Chrome -------------------------------------------------------

  merge(theme.colors, {
    'editorGroupHeader.tabsBackground': asBackgroundColor(gray0),
    'titleBar.inactiveBackground': asBackgroundColor(gray1),
    'titleBar.activeBackground': asBackgroundColor(gray1),
    'titleBar.border': asBackgroundColor(gray0)
  });


  // ----- Editor Tabs ---------------------------------------------------------

  merge(theme.colors, {
    'tab.border': asBackgroundColor(gray0),

    // Active tab.
    'tab.activeForeground': asForegroundColor(gray8),
    'tab.activeBackground': asBackgroundColor(gray1),

    // Optional active tab decoration.
    'tab.activeBorder': asBackgroundColor(gray1),
    'tab.activeBorderTop': asForegroundColor(accentColor),

    // Inactive tabs.
    'tab.inactiveForeground': asBackgroundColor(gray5),
    'tab.inactiveBackground': asBackgroundColor(gray0).lighten(0.32)
  });


  // ----- Editor --------------------------------------------------------------

  merge(theme.colors, {
    'editor.foreground': asForegroundColor(gray7),
    'editor.background': asBackgroundColor(gray1).darken(0.08),
    'editor.lineHighlightBackground': asBackgroundColor(gray1).lighten(0.08),
    'editorCursor.foreground': asForegroundColor(accentColor).desaturate(0.48),
    'editorWhitespace.foreground': asForegroundColor(gray5),

    // Indent guides.
    'editorIndentGuide.background': asBackgroundColor(HOT_PINK),
    'editorIndentGuide.activeBackground': asBackgroundColor(HOT_PINK),

    // Rulers.
    'editorRuler.foreground': asBackgroundColor(gray3),

    // Links in Editor panes (not to be confused with text links, such as those
    // on the Welcome Page or Release Notes pages).
    'editorLink.activeForeground': asForegroundColor(accentColor)
  });


  // ----- Editor - Token Highlighting -----------------------------------------

  merge(theme.colors, {
    // Background color when manually selecting text with the cursor.
    'editor.selectionBackground': asBackgroundColor(gray5).alpha(0.12),

    // Unable to produce this. May be related to:
    // https://github.com/Microsoft/vscode/issues/36490
    // https://github.com/Microsoft/vscode/issues/34105
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
    'editor.findMatchHighlightBackground': asBackgroundColor(gray5).alpha(0.12),

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
    'editorBracketMatch.border': asBackgroundColor(transparent)
  });


  // ----- Editor - Squiggles --------------------------------------------------

  merge(theme.colors, {
    'editorError.foreground': asForegroundColor(red).alpha(0.48),
    'editorWarning.foreground': asForegroundColor(yellow).alpha(0.48)
  });


  // ----- Editor Widgets ------------------------------------------------------

  merge(theme.colors, {
    'editorWidget.background': asBackgroundColor(gray0),
    'editorWidget.border': asBackgroundColor(gray3),
    'editorHoverWidget.background': asBackgroundColor(gray0),
    'editorHoverWidget.border': asBackgroundColor(gray3)
  });


  // ----- Debug Toolbar -------------------------------------------------------

  merge(theme.colors, {
    'debugToolBar.background': asBackgroundColor(gray0),
    'debugToolBar.border': asBackgroundColor(gray2)
  });


  // ----- Editor Groups -------------------------------------------------------

  merge(theme.colors, {
    'editorGroup.dropBackground': asBackgroundColor(gray1),
    // Only visible when multiple editor groups are active.
    'editorGroup.border': asBackgroundColor(gray3),
    'editorGroup.emptyBackground': asBackgroundColor(gray1)
  });


  // ----- Gutter --------------------------------------------------------------

  merge(theme.colors, {
    'editorLineNumber.foreground': asForegroundColor(gray5).desaturate(0.08),
    'editorGutter.background': asBackgroundColor(gray1).darken(0.16),
    'editorGutter.modifiedBackground': asForegroundColor(purple).alpha(0.6),
    'editorGutter.addedBackground': asForegroundColor(green).alpha(0.6),
    'editorGutter.deletedBackground': asForegroundColor(red).alpha(0.6)
  });


  // ----- Panels (Terminal, etc.) ---------------------------------------------

  merge(theme.colors, {
    'panel.background': asBackgroundColor(gray0),
    'panel.dropBackground': asBackgroundColor(gray2),

    // This is the border between panels and other elements, but also the border
    // between multiple panels, such as multiple terminal panes.
    'panel.border': asBackgroundColor(gray0).lighten(0.64),

    // Panel titles (tabs).
    'panelTitle.activeForeground': asForegroundColor(gray8),
    'panelTitle.activeBorder': asForegroundColor(accentColor),
    'panelTitle.inactiveForeground': asBackgroundColor(gray5)
  });


  // ----- Activity Bar (Far Left or Far Right) --------------------------------

  merge(theme.colors, {
    'activityBar.foreground': asBackgroundColor(gray5),
    'activityBar.background': asBackgroundColor(gray1),
    'activityBar.border': asBackgroundColor(gray0),
    'activityBar.dropBackground': asBackgroundColor(gray2),

    // Badges.
    'activityBarBadge.foreground': asBackgroundColor(gray8),
    'activityBarBadge.background': asForegroundColor(accentColor)
  });


  // ----- Side Bar (Adjacent to Activity Bar) ---------------------------------

  merge(theme.colors, {
    // This color also controls the command palette dropdown.
    'sideBar.foreground': asForegroundColor(gray4).lighten(0.16),
    'sideBar.background': asBackgroundColor(gray0).desaturate(0.08),
    'sideBar.border': asBackgroundColor(gray0).lighten(0.42),

    'sideBarSectionHeader.background': asBackgroundColor(gray1),
    'sideBarSectionHeader.foreground': asForegroundColor(gray7),

    'sideBarTitle.foreground': asForegroundColor(gray6),

    // Drop background when chaning the order of entire sidebar sections (not
    // items in an individual sidebar panel).
    'sideBar.dropBackground': asBackgroundColor(gray0).alpha(0.6)
  });


  // ----- Status Bar (Bottom) -------------------------------------------------

  merge(theme.colors, {
    'statusBar.foreground': asBackgroundColor(gray6),
    'statusBar.background': asBackgroundColor(gray1).darken(0.16),

    // Colors when no folder is opened.
    'statusBar.noFolderForeground': asBackgroundColor(gray6),
    'statusBar.noFolderBackground': asBackgroundColor(gray1),

    'statusBar.border': asBackgroundColor(gray2),

    // Colors when debugging.
    'statusBar.debuggingForeground': asBackgroundColor(green).alpha(0.86),
    'statusBar.debuggingBackground': asBackgroundColor(gray1),
    'statusBar.debuggingBorder': asBackgroundColor(gray2)
  });


  // ----- Scroll Bars ---------------------------------------------------------

  merge(theme.colors, {
    // Drop shadow applied to any view to indicate that it has been scrolled.
    'scrollbar.shadow': asBackgroundColor(black).alpha(0.12),

    // Highlight applied to scroll bars and the minimap scroller on the active
    // editor group.
    'scrollbarSlider.background': asBackgroundColor(gray2),
    'scrollbarSlider.hoverBackground': asBackgroundColor(gray3),
    'scrollbarSlider.activeBackground': asBackgroundColor(gray3)
  });


  // ----- Badges (Non Activity Bar) -------------------------------------------

  merge(theme.colors, {
    'badge.background': asForegroundColor(accentColor),
    'badge.foreground': asBackgroundColor(gray8)
  });


  // ----- Lists & Trees -------------------------------------------------------

  merge(theme.colors, {
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
    'list.inactiveFocusBackground': asBackgroundColor(gray1)
  });


  // ----- Peek Views ----------------------------------------------------------

  merge(theme.colors, {
    'peekView.border': asBackgroundColor(gray4),
    'peekViewEditor.background': asBackgroundColor(gray1),
    'peekViewTitle.background': asBackgroundColor(gray1),
    'peekViewResult.background': '#191B21', // FIXME
    'peekViewEditor.matchHighlightBackground': asBackgroundColor(gray5).alpha(0.12),
    'peekViewResult.matchHighlightBackground': asBackgroundColor(gray5).alpha(0.12),
    'peekViewResult.selectionBackground': asBackgroundColor(gray5).alpha(0.12)
  });


  // ----- Notifications -------------------------------------------------------

  merge(theme.colors, {
    'notifications.foreground': asForegroundColor(gray7),
    'notifications.background': asBackgroundColor(gray1),

    'notificationCenterHeader.foreground': asForegroundColor(gray7),
    'notificationCenterHeader.background': asBackgroundColor(gray1),

    'notificationLink.foreground': asForegroundColor(gray1),
    'notificationCenter.border': asBackgroundColor(gray3),
    'notificationToast.border': asBackgroundColor(gray3),
    'notifications.border': asBackgroundColor(gray3)
  });


  // ----- Dropdowns -----------------------------------------------------------

  merge(theme.colors, {
    'dropdown.background': asBackgroundColor(gray1),
    'dropdown.border': asBackgroundColor(gray2)
  });


  // ----- Inputs --------------------------------------------------------------

  merge(theme.colors, {
    'input.foreground': asForegroundColor(gray7),
    'input.background': asBackgroundColor(gray1),
    'input.border': asBackgroundColor(gray3),
    'input.placeholderForeground': asBackgroundColor(gray5),

    // Contextual states.
    'inputValidation.errorBorder': asBackgroundColor(red),
    'inputValidation.warningBorder': asBackgroundColor(yellow),
    'inputValidation.infoBorder': asBackgroundColor(blue),

    'inputOption.activeBorder': asBackgroundColor(green)
  });


  // ----- Buttons -------------------------------------------------------------

  merge(theme.colors, {
    'button.foreground': asForegroundColor(gray8),
    'button.background': asBackgroundColor(accentColor).saturate(0.12).darken(0.22),
    'button.hoverBackground': asBackgroundColor(accentColor).saturate(0.08).darken(0.08)
  });


  // ----- Git Colors ----------------------------------------------------------

  merge(theme.colors, {
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
  });


  return theme;
};
