/**
 * ===== Atra ==================================================================
 *
 * A VS Code theme heavily inspired by the Spacegray / Base 16 Ocean Dark themes
 * for VS Code and various other IDEs.
 *
 * Prior Art:
 * - https://github.com/ionutvmi/spacegray-vscode
 * - https://github.com/chriskempson/base16
 */

// Primary colors.
import {
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
  gray6,
  gray7
} from './etc/colors';

// Secondary colors.
import {
  black,
  green,
  red,
  orange,
  yellow,
  blue,
  purple,
  rust,
  seafoam
} from './etc/colors';

// Tertiary colors.
import {
  HOT_PINK,
  darkRed,
  darkGray1,
  darkGray2,
  darkGray3,
  white,
  transparent
} from './etc/colors';


export default {
  $schema: 'vscode://schemas/color-theme',
  name: 'Atra',
  colorSpaceName: 'sRGB',
  author: 'darkobits',
  semanticClass: 'darkobits.atra',
  type: 'dark',


  // ----- Syntax Highlighting -------------------------------------------------

  tokenColors: [{
    name: 'Text',
    settings: {
      foreground: gray6
    },
    scope: 'variable.parameter.function'
  }, {
    name: 'Function Calls',
    settings: {
      foreground: gray6
    },
    scope: [
      'meta.function-call',
      // Added to ensure correct highlighting of things like "process" in
      // certain situations. May cause issues.
      'support.type.object',
      'meta.method-call meta.function support.type.object',
      'meta.method-call entity.name.function',
      'entity.quasi meta.function-call',
      'string.template meta.function-call'
    ]
  }, {
    name: 'Unquoted Object Keys',
    settings: {
      foreground: gray6
    },
    scope: [
      'constant.other.object.key string.unquoted',
      'constant.other.label'
    ]
  }, {
    name: 'Comments',
    settings: {
      foreground: gray4
    },
    scope: [
      'comment',
      'comment.block.documentation',
      'comment.block.documentation storage.type.class',
      'punctuation.definition.comment'
    ]
  }, {
    name: 'Punctuation',
    settings: {
      foreground: gray6
    },
    scope: [
      'punctuation.definition.string',
      'punctuation.definition.variable',
      'punctuation.definition.string',
      'punctuation.definition.parameters',
      'punctuation.definition.string',
      'punctuation.definition.array'
    ]
  }, {
    name: 'Braces & Parens',
    settings: {
      foreground: gray6.darken(0.2) // Darken(0.2, gray6)
    },
    scope: [
      'meta.brace.curly',
      'meta.brace.square',
      'meta.brace.round'
    ]
  }, {
    name: 'Delimiters',
    settings: {
      foreground: gray6
    }
    // FIX THIS
    // scope: 'none'
  }, {
    name: 'Operators',
    settings: {
      foreground: gray6
    },
    scope: 'keyword.operator'
  }, {
    name: 'Keywords',
    settings: {
      foreground: purple
    },
    scope: 'keyword'
  }, {
    name: 'Control Flow',
    settings: {
      foreground: purple,
      fontStyle: 'italic'
    },
    scope: [
      'keyword.control'
    ]
  }, {
    name: 'Variables',
    settings: {
      foreground: gray6
    },
    // Do not use the scope 'variable' here without additional specificity, as
    // it may inadvertently highlight JSDoc comments.
    scope: [
      'meta.definition variable',
      'variable.other.readwrite',
      'entity.quasi variable.other'
    ]
  }, {
    name: 'Functions',
    settings: {
      foreground: blue
    },
    scope: [
      // This includes method calls in classes, which we don't want.
      // 'entity.name.function',
      'meta.definition.method entity.name.function',
      'meta.definition.function entity.name.function',
      'meta.definition.variable entity.name.function',
      'meta.function entity.name.function',
      'meta.require',
      'support.function.any-method'
    ]
  }, {
    name: 'Classes / Support',
    settings: {
      foreground: yellow
    },
    scope: [
      'support.class',
      'support.type.object.console',
      'entity.name.type.class',
      'meta.entity.new.name.expr'
    ]
  }, {
    name: 'Methods',
    settings: {
      foreground: blue
    },
    scope: 'keyword.other.special-method'
  }, {
    name: 'Storage',
    settings: {
      foreground: purple,
      fontStyle: 'italic'
    },
    // Do not use 'storage' without a more specific scope here, as it may
    // inadvertently highlight JSDoc comments.
    scope: [
      'meta.var storage.type',
      'meta.class storage.modifier',
      'meta.function storage.type.function',
      'meta.function storage.modifier'
      // Do *not* use 'storage.type' here without a more specific scope, as it
      // will apply to class constructors in TypeScript, possibly other
      // languages.
      // 'storage.type'
    ]
  }, {
    name: 'Support',
    settings: {
      foreground: seafoam
    },
    scope: 'support.function'
  }, {
    name: 'Strings, Inherited Class',
    settings: {
      foreground: green.alpha(0.86)
    },
    scope: [
      // 'string.quoted.template',
      'string.quoted',
      'string.quoted punctuation.definition.string.begin',
      'string.quoted punctuation.definition.string.end',
      'string punctuation.support.type.property-name.begin',
      'string punctuation.support.type.property-name.end',
      'string.json support.type.property-name',
      'string.template',
      'constant.other.symbol',
      'entity.other.inherited-class'
    ]
  }, {
    name: 'Interpolated Strings (Begin/End Tokens)',
    settings: {
      foreground: blue
    },
    scope: [
      'string.quoted.template punctuation.quasi.element.begin',
      'string.quoted.template punctuation.quasi.element.end',
      'string.template punctuation.definition.template-expression.begin',
      'string.template punctuation.definition.template-expression.end'
    ]
  }, {
    name: 'Numbers',
    settings: {
      foreground: orange
    },
    scope: 'constant.numeric'
  }, {
    name: 'Boolean',
    settings: {
      foreground: orange
    },
    scope: 'constant.language.boolean'
  }, {
    name: 'Constants',
    settings: {
      foreground: orange
    },
    scope: 'constant.language'
  }, {
    name: 'Tags',
    settings: {
      foreground: red
    },
    scope: 'entity.name.tag'
  }, {
    name: 'Attributes',
    settings: {
      foreground: orange
    },
    scope: 'entity.other.attribute-name'
  }, {
    name: 'Attribute IDs',
    settings: {
      foreground: blue
    },
    scope: [
      'entity.other.attribute-name.id',
      'punctuation.definition.entity'
    ]
  }, {
    name: 'Selector',
    settings: {
      foreground: purple
    },
    scope: 'meta.selector'
  }, {
    name: 'Headings',
    settings: {
      fontStyle: '',
      foreground: blue
    },
    scope: [
      'markup.heading punctuation.definition.heading',
      'entity.name.section'
    ]
  }, {
    name: 'Units',
    settings: {
      foreground: orange
    },
    scope: 'keyword.other.unit'
  }, {
    name: 'Bold',
    settings: {
      fontStyle: 'bold',
      foreground: yellow
    },
    scope: [
      'markup.bold',
      'punctuation.definition.bold'
    ]
  }, {
    name: 'Italic',
    settings: {
      fontStyle: 'italic',
      foreground: purple
    },
    scope: [
      'markup.italic',
      'punctuation.definition.italic'
    ]
  }, {
    name: 'Code',
    settings: {
      foreground: green
    },
    scope: 'markup.raw.inline'
  }, {
    name: 'Link Text',
    settings: {
      foreground: red
    },
    scope: 'string.other.link'
  }, {
    name: 'Link Url',
    settings: {
      foreground: orange
    },
    scope: 'meta.link'
  }, {
    name: 'Lists',
    settings: {
      foreground: red
    },
    scope: 'markup.list'
  }, {
    name: 'Quotes',
    settings: {
      foreground: orange
    },
    scope: 'markup.quote'
  }, {
    name: 'Separator',
    settings: {
      foreground: gray6
    },
    scope: 'meta.separator'
  }, {
    name: 'Inserted',
    settings: {
      foreground: green
    },
    scope: [
      'markup.inserted',
      'markup.inserted.git_gutter'
    ]
  }, {
    name: 'Deleted',
    settings: {
      foreground: red
    },
    scope: [
      'markup.deleted',
      'markup.deleted.git_gutter'
    ]
  }, {
    name: 'Changed',
    settings: {
      foreground: purple
    },
    scope: [
      'markup.changed',
      'markup.changed.git_gutter'
    ]
  }, {
    name: 'Ignored',
    settings: {
      foreground: gray3
    },
    scope: [
      'markup.ignored',
      'markup.ignored.git_gutter'
    ]
  }, {
    name: 'Untracked',
    settings: {
      foreground: gray3
    },
    scope: [
      'markup.untracked',
      'markup.untracked.git_gutter'
    ]
  }, {
    name: 'Colors',
    settings: {
      foreground: seafoam
    },
    scope: 'constant.other.color'
  }, {
    name: 'Regular Expressions',
    settings: {
      foreground: seafoam
    },
    scope: 'string.regexp'
  }, {
    name: 'Escape Characters',
    settings: {
      foreground: seafoam
    },
    scope: 'constant.character.escape'
  }, {
    name: 'Embedded',
    settings: {
      foreground: rust
    },
    scope: [
      'punctuation.section.embedded',
      'variable.interpolation'
    ]
  }, {
    name: 'Invalid',
    settings: {
      foreground: white
    },
    scope: 'invalid.illegal'
  }, {
    name: 'This',
    settings: {
      foreground: darkRed,
      fontStyle: 'italic'
    },
    scope: 'variable.language.this'
  }, {
    name: 'Type Names',
    settings: {
      foreground: yellow
    },
    scope: [
      'meta.type entity.name.type.alias',
      'meta.interface entity.name.type.interface'
    ]
  }, {
    name: 'Types',
    settings: {
      foreground: rust
    },
    scope: [
      // 'meta.function meta.return.type',
      'meta.function meta.type',
      'meta.function support.type',
      'meta.interface support.type',
      'meta.type entity.name.type',
      'meta.type support.type',
      'meta.type punctuation.definition',
      'meta.return.type'
    ]
  }],

  colors: {
    // ----- Base Colors -------------------------------------------------------

    'focusBorder': gray3,
    'foreground': gray6,
    'widget.shadow': black.alpha(0.1),
    'selection.background': gray5,
    'descriptionForeground': gray5,
    'errorForeground': red,
    'textSeparator.foreground': HOT_PINK,


    // ----- Text Colors -------------------------------------------------------

    'textBlockQuote.border': orange,
    'textLink.foreground': blue,
    'textLink.activeForeground': gray7,


    // ----- Window Chrome -----------------------------------------------------

    'editorGroupHeader.tabsBackground': darkGray1,
    'titleBar.inactiveBackground': darkGray3,
    'titleBar.activeBackground': darkGray3,
    'titleBar.border': darkGray1,


    // ----- Editor Tabs -------------------------------------------------------

    'tab.border': darkGray1,

    // Active tab.
    'tab.activeForeground': gray7,
    'tab.activeBackground': darkGray3,

    // Optional active tab decoration.
    'tab.activeBorder': darkGray3,
    'tab.activeBorderTop': darkRed, // Green,

    // Inactive tabs.
    'tab.inactiveForeground': gray4,
    'tab.inactiveBackground': darkGray2,


    // ----- Editor ------------------------------------------------------------

    'editor.foreground': gray6,
    'editor.background': darkGray3,
    'editor.lineHighlightBackground': gray4.alpha(0.06),
    'editorCursor.foreground': purple,
    'editorWhitespace.foreground': gray4,

    // Indent guides.
    'editorIndentGuide.background': HOT_PINK,
    'editorIndentGuide.activeBackground': HOT_PINK,

    // Rulers.
    'editorRuler.foreground': gray2,


    // ----- Editor - Token Highlighting ---------------------------------------

    // Background color when manually selecting text with the cursor.
    'editor.selectionBackground': gray4.alpha(0.12),

    // Unable to produce this.
    'editor.selectionForeground': HOT_PINK, // gray4.alpha(0.06),

    // 1. Background color applied to tokens in the current document matching
    //    the user's current selection, but *not* the token that the cursor is
    //    currently in.
    'editor.selectionHighlightBackground': gray4.alpha(0.24),

    // This wil be the line highlight color of the line containing the current
    // active Find match, among other things. It should not be opaque.
    'editor.rangeHighlightBackground': gray4.alpha(0.06),

    // 1. Background color applied to a selected block of text when the editor
    //    loses focus.
    // 2. Background color applied to a single slected token matching the
    //    current Find query (the user can iterate through matches using forward
    //    and backward arrows).
    'editor.inactiveSelectionBackground': gray4.alpha(0.06),

    // Background color applied to the 'active' token matching the current Find
    // query.
    'editor.findMatchBackground': gray4.alpha(0.06),

    // Background color applied to all 'inactive' tokens matching the current
    // Find query.
    'editor.findMatchHighlightBackground': gray4.alpha(0.06),

    // 1. When the cursor is inside a symbol, this background color will be
    //    applied to all locations where that symbol is read-from. Note that
    //    *while* the user is selecting a block of text, 'selectionBackground'
    //    will be used.
    // 2. This may also be the background color applied to the symbol the cursor
    //    is currently inside of. (See 'selectionHighlightBackground')
    'editor.wordHighlightBackground': gray4.alpha(0.06),

    // When the cursor is inside a symbol, this background color will be applied
    // to all locations where that symbol is written-to. Note that *while* the
    // user is selecting a block of text, 'selectionBackground' will be used.
    'editor.wordHighlightStrongBackground': gray4.alpha(0.06),

    // Bracket-matching decoration.
    'editorBracketMatch.background': gray4.alpha(0.32),
    'editorBracketMatch.border': transparent,


    // ----- Editor - Squiggles ------------------------------------------------

    'editorError.foreground': red.alpha(0.5),
    'editorWarning.foreground': yellow.alpha(0.5),


    // ----- Editor Widgets ----------------------------------------------------

    'editorWidget.background': darkGray1,
    'editorWidget.border': gray2,
    'editorHoverWidget.background': darkGray1,
    'editorHoverWidget.border': gray2,


    // ----- Debug Toolbar -----------------------------------------------------

    'debugToolBar.background': darkGray1,
    'debugToolBar.border': gray1,


    // ----- Editor Groups -----------------------------------------------------

    'editorGroup.dropBackground': darkGray3,
    'editorGroup.border': gray2,
    'editorGroup.emptyBackground': darkGray2,


    // ----- Gutter ------------------------------------------------------------

    'editorGutter.background': darkGray2,
    'editorGutter.modifiedBackground': purple.alpha(0.6),
    'editorGutter.addedBackground': green.alpha(0.6),
    'editorGutter.deletedBackground': red.alpha(0.6),
    'editorLineNumber.foreground': gray4,


    // ----- Panels (Terminal, etc.) -------------------------------------------

    'panel.background': darkGray1,
    'panel.dropBackground': gray1,

    // Panel titles (tabs).
    'panelTitle.activeForeground': gray7,
    'panelTitle.activeBorder': darkRed,
    'panelTitle.inactiveForeground': gray4,


    // ----- Activity Bar (Far Left or Far Right) ------------------------------

    'activityBar.foreground': gray4,
    'activityBar.background': darkGray3,
    'activityBar.border': darkGray1,
    'activityBar.dropBackground': gray1,

    // Badges.
    'activityBarBadge.foreground': gray7,
    'activityBarBadge.background': darkRed,


    // ----- Side Bar (Adjacent to Activity Bar) -------------------------------

    // This color also controls the command palette dropdown.
    'sideBar.foreground': gray3,
    'sideBar.background': darkGray1,
    'sideBar.border': darkGray1,

    'sideBarSectionHeader.background': darkGray3,
    'sideBarSectionHeader.foreground': gray6,

    'sideBarTitle.foreground': gray5,

    // Drop background when chaning the order of entire sidebar sections (not
    // items in an individual sidebar panel).
    'sideBar.dropBackground': '#23283050',


    // ----- Status Bar (Bottom) -----------------------------------------------

    'statusBar.foreground': gray5,
    'statusBar.background': darkGray1,

    // Colors when no folder is opened.
    'statusBar.noFolderForeground': gray5,
    'statusBar.noFolderBackground': darkGray1,

    'statusBar.border': gray1,

    // Colors when debugging.
    'statusBar.debuggingForeground': green.alpha(0.86),
    'statusBar.debuggingBackground': darkGray1,
    'statusBar.debuggingBorder': gray1,


    // ----- Scroll Bars -------------------------------------------------------

    // Drop shadow applied to any view to indicate that it has been scrolled.
    'scrollbar.shadow': black.alpha(0.1),

    // Highlight applied to scroll bars and the minimap scroller on the active
    // editor group.
    'scrollbarSlider.background': gray1,
    'scrollbarSlider.hoverBackground': gray2,
    'scrollbarSlider.activeBackground': gray2,


    // ----- Badges (Non Activity Bar) -----------------------------------------

    'badge.background': darkRed,
    'badge.foreground': gray7,


    // ----- Lists & Trees -----------------------------------------------------

    // Selected item when the list/tree is blurred.
    'list.inactiveSelectionForeground': gray6,
    'list.inactiveSelectionBackground': gray1,

    // Selected item when the list/tree has focus.
    'list.activeSelectionForeground': gray7,
    'list.activeSelectionBackground': gray1,

    // Focused/selected item.
    'list.focusForeground': gray7,
    'list.focusBackground': gray1,

    // Hovered item.
    'list.hoverForeground': gray7,
    'list.hoverBackground': darkGray3,

    // Dropdown background color.
    'list.dropBackground': darkGray1,

    // Contextual states.
    'list.errorForeground': red.desaturate(0.3).darken(0.2),
    'list.warningForeground': yellow.desaturate(0.6).darken(0.2),

    'list.highlightForeground': darkRed,

    // Surprisingly, this color is used for notification backgrounds when one of
    // the notifications buttons (OK/Cancel) is being clicked.
    'list.inactiveFocusBackground': darkGray3,


    // ----- Peek Views --------------------------------------------------------

    'peekView.border': gray3,
    'peekViewEditor.background': darkGray1,
    'peekViewTitle.background': darkGray2,
    'peekViewResult.background': '#191B21',
    'peekViewEditor.matchHighlightBackground': gray4.alpha(0.12),
    'peekViewResult.matchHighlightBackground': gray4.alpha(0.12),
    'peekViewResult.selectionBackground': gray4.alpha(0.12),


    // ----- Notifications -----------------------------------------------------

    'notifications.foreground': gray6,
    'notifications.background': darkGray2,

    'notificationCenterHeader.foreground': gray6,
    'notificationCenterHeader.background': darkGray3,

    'notificationLink.foreground': darkGray2,
    'notificationCenter.border': gray2,
    'notificationToast.border': gray2,
    'notifications.border': gray2,


    // ----- Dropdowns ---------------------------------------------------------

    'dropdown.background': darkGray3,
    'dropdown.border': gray1,


    // ----- Inputs ------------------------------------------------------------

    'input.foreground': gray6,
    'input.background': darkGray3,
    'input.border': gray2,
    'input.placeholderForeground': gray4,

    // Contextual states.
    'inputValidation.errorBorder': red,
    'inputValidation.warningBorder': yellow,
    'inputValidation.infoBorder': blue,

    'inputOption.activeBorder': green,


    // ----- Buttons -----------------------------------------------------------

    'button.foreground': gray7,
    'button.background': red.darken(0.32),
    'button.hoverBackground': darkRed,


    // ----- Git Colors --------------------------------------------------------

    // Color for modified Git resources. Used for file labels and the SCM viewlet.
    'gitDecoration.modifiedResourceForeground': purple.desaturate(0.5).darken(0.3),

    // Color for deleted Git resources. Used for file labels and the SCM viewlet.
    'gitDecoration.deletedResourceForeground': red.desaturate(0.3).darken(0.2),

    // Color for untracked Git resources. Used for file labels and the SCM viewlet.
    'gitDecoration.untrackedResourceForeground': green.desaturate(0.5).darken(0.3),

    // Color for ignored Git resources. Used for file labels and the SCM viewlet.
    'gitDecoration.ignoredResourceForeground': gray2,

    // Color for conflicting Git resources. Used for file labels and the SCM viewlet.
    'gitDecoration.conflictingResourceForeground': red.desaturate(0.3).darken(0.2)

    // Color for submodule resources.
    // 'gitDecoration.submoduleResourceForeground': ''
  }
};
