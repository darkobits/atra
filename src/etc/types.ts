import {Color} from '@darkobits/vsct';


export interface LooseObject {
  [index: string]: any;
}


export interface AstraOptions {
  /**
   * Customizable accent color used in various places throughout the theme.
   */
  accentColor: Color;

  /**
   * Whether to use italic formatting for various types of symbols. Recommended
   * when using fonts like Operator Mono.
   */
  useItalic?: boolean;

  /**
   * Optional function used to modify all foreground colors.
   */
  modifyForeground?(color: Color): Color;

  /**
   * Optional function used to modify all background colors.
   */
  modifyBackground?(color: Color): Color;
}
