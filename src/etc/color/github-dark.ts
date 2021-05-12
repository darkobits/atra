import { Color } from '@darkobits/vsct';


// ----- GitHub Dark Theme Colors ----------------------------------------------

export default {
  // ----- GitHub: Grays -------------------------------------------------------

  scaleWhite: new Color('#F0F6FC'),
  scaleGray1: new Color('#C9D1D9'),
  scaleGray2: new Color('#B1BAC4'),
  scaleGray3: new Color('#8B949E'),
  scaleGray4: new Color('#6E7681'),
  scaleGray5: new Color('#484F58'),
  scaleGray6: new Color('#30363D'),
  scaleGray7: new Color('#21262D'),
  scaleGray8: new Color('#161B22'),
  scaleGray9: new Color('#0D1117'),
  scaleBlack: new Color('#000000'),

  /**
   * Light gray used for primary text.
   *
   * --color-text-primary
   */
  get textPrimary() {
    return this.scaleGray1;
  },

  /**
   * Medium gray used for inactive text.
   *
   * --color-text-secondary
   */
  get textSecondary() {
    return this.scaleGray3;
  },

  /**
   * --color-border-tertiary
   */
  get borderTertiary() {
    return this.scaleGray4;
  },

  /**
   * --color-text-placeholder
   */
  get textPlaceholder() {
    return this.scaleGray5;
  },

  /**
   * --color-border-primary
   */
  get borderPrimary() {
    return this.scaleGray6;
  },

  /**
   * --color-bg-secondary
   */
  get borderSecondary() {
    return this.scaleGray7;
  },

  /**
   * --color-bg-overlay
   */
  get bgOverlay() {
    return this.scaleGray7;
  },

  /**
   * --color-bg-tertiary
   */
  get bgTertiary() {
    return this.scaleGray8;
  },

  /**
   * Dark black used for backgrounds in primary panels.
   *
   * --color-bg-canvas
   */
  get bgCanvas() {
    return this.scaleGray9;
  },

  /**
   * --color-bg-primary
   */
  get bgPrimary() {
    return this.scaleGray9;
  },

  /**
   * --color-bg-secondary
   */
  get bgSecondary() {
    return this.scaleGray9;
  },


  /**
   * Medium gray used for badge backgrounds.
   *
   * --color-counter-bg
   */
  counterBg: new Color({
    r: 48, g: 54, b: 61
  }),


  // ----- GitHub: Reds --------------------------------------------------------

  scaleRed1: new Color('#FFC1BA'),
  scaleRed2: new Color('#FFA198'),
  scaleRed3: new Color('#FF7B72'),
  scaleRed4: new Color('#F85149'),
  scaleRed5: new Color('#DA3633'),
  scaleRed6: new Color('#B62324'),
  scaleRed7: new Color('#8E1519'),
  scaleRed8: new Color('#67060C'),

  /**
   * --color-text-danger
   */
  get textDanger() {
    return this.scaleRed4;
  },

  /**
   * Bright red used as a primary text/icon color in pills.

   * --color-pr-state-closed-text 4
   */
  get prStateClosedText() {
    return this.scaleRed4;
  },

  /**
   * Dark red used as a background color in pills.
   *
   * --color-pr-state-closed-bg 5
   */
  get prStateClosedBg() {
    return this.scaleRed5.alpha(0.1);
  },

  /**
   * Medium red used as a border color in pills.
   *
   * --color-pr-state-closed-border
   */
  get prStateClosedBorder() {
    return this.scaleRed5.alpha(0.4);
  },


  // ----- GitHub: Greens ------------------------------------------------------

  scaleGreen1: new Color('#7EE787'),
  scaleGreen2: new Color('#56D364'),
  scaleGreen3: new Color('#3FB950'),
  scaleGreen4: new Color('#2EA043'),
  scaleGreen5: new Color('#238636'),
  scaleGreen6: new Color('#196C2E'),
  scaleGreen7: new Color('#0F5323'),
  scaleGreen8: new Color('#033A16'),

  /**
   * --color-text-success
   */
  get textSuccess() {
    return this.scaleGreen2;
  },

  /**
   * Bright green used as a primary text/icon color in pills.
   *
   * --color-pr-state-open-text
   */
  get prStateOpenText() {
    return this.scaleGreen3;
  },

  /**
   * Dark green used as a background color in pills.
   *
   * --color-pr-state-open-bg 3
   */
  get prStateOpenBg() {
    return this.scaleGreen3.alpha(0.1);
  },

  /**
   * Medium green used as a border color in pills.
   *
   * --color-pr-state-open-border
   */
  get prStateOpenBorder() {
    return this.scaleGreen3.alpha(0.4);
  },

  /**
   * --color-btn-primary-border
   */
  get btnPrimaryBorder() {
    return this.scaleGreen4;
  },

  /**
   * --color-btn-primary-bg
   */
  get btnPrimaryBg() {
    return this.scaleGreen5;
  },


  // ----- GitHub: Blues -------------------------------------------------------

  scaleBlue1: new Color('#A5D6FF'),
  scaleBlue2: new Color('#79C0FF'),
  scaleBlue3: new Color('#58A6FF'),
  scaleBlue4: new Color('#388BFD'),
  scaleBlue5: new Color('#1F6FEB'),
  scaleBlue6: new Color('#1158C7'),
  scaleBlue7: new Color('#0D419D'),
  scaleBlue8: new Color('#0C2D6B'),

  /**
   * Dark blue used as a background color in pills.
   *
   * --color-topic-tag-bg
   */
  get topicTagBg() {
    return this.scaleBlue4.alpha(0.1);
  },

  /**
   * Medium blue used as a border color in pills/labels.
   *
   * Note: The "dependencies" label uses this color as a border.
   */
  get topicTagBorder() {
    return this.scaleBlue4.alpha(0.4);
  },

  /**
   * Bright blue used as a primary text/icon color in pills/labels.
   *
   * --color-topic-tag-text
   */
  get topicTagText() {
    return this.scaleBlue3;
  },


  // ----- GitHub: Purples -----------------------------------------------------

  scalePurple1: new Color('#E2C5FF'),
  scalePurple2: new Color('#D2A8FF'),
  scalePurple3: new Color('#BC8CFF'),
  scalePurple4: new Color('#A371F7'),
  scalePurple5: new Color('#8957E5'),
  scalePurple6: new Color('#6E40C9'),
  scalePurple7: new Color('#553098'),
  scalePurple8: new Color('#3C1E70'),

  /**
   * Dark purple background color in pills.
   *
   * --color-pr-state-merged-bg
   */
  get prStateMergedBg() {
    return this.scalePurple3.alpha(0.1);
  },

  /**
   * Medium purple used as a border color in pills.
   *
   * --color-pr-state-merged-border
   */
  get prStateMergedBorder() {
    return this.scalePurple3.alpha(0.4);
  },

  /**
   * Bright purple used as primary text/icon color in pills.
   *
   * --color-pr-state-merged-text
   */
  get prStateMergedText() {
    return this.scalePurple4;
  },


  // ----- GitHub: Yellows -----------------------------------------------------

  scaleYellow1: new Color('#F2CC60'),
  scaleYellow2: new Color('#E3B341'),
  scaleYellow3: new Color('#D29922'),
  scaleYellow4: new Color('#BB8009'),
  scaleYellow5: new Color('#9E6A03'),
  scaleYellow6: new Color('#845306'),
  scaleYellow7: new Color('#693E00'),
  scaleYellow8: new Color('#4B2900'),

  /**
   *
   * Dark yellow used as a background color in security warning banners.
   *
   * --color-alert-warn-bg
   */
  get alertWarnBg() {
    return this.scaleYellow4.alpha(0.1);
  },

  /**
   * Medium yellow used as a border color in security warning banners.
   *
   * --color-alert-warn-border
   */
  get alertWarnBorder() {
    return this.scaleYellow4.alpha(0.4);
  },

  /**
   * Bright yellow used as a primary text/icon color in security warning
   * banners.
   *
   * TODO: Same as textWarning. Alias or remove.
   *
   * --color-alert-warn-text
   * --color-scale-yellow-2
   */
  get alertWarnText() {
    return this.scaleYellow2;
  },

  /**
   * Bright yellow used as a primary text/icon color in warnings.
   *
   * --color-text-warning
   * --color-scale-yellow-2
   */
  get textWarning() {
    return this.scaleYellow2;
  },


  // ----- GitHub: Oranges -----------------------------------------------------

  scaleOrange1: new Color('#FFC680'),
  scaleOrange2: new Color('#FFA657'),
  scaleOrange3: new Color('#FFA657'),
  scaleOrange4: new Color('#DB6D28'),
  scaleOrange5: new Color('#BD561D'),
  scaleOrange6: new Color('#9B4215'),
  scaleOrange7: new Color('#762D0A'),
  scaleOrange8: new Color('#5A1E02')
};
