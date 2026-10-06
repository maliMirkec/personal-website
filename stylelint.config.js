import { propertyGroups } from 'stylelint-config-clean-order'

// Property order is a warning and never auto-fixed: new code follows it,
// existing CSS is not bulk-reordered.
const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  properties,
}))

export default {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  rules: {
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
        disableFix: true,
      },
    ],
    'declaration-empty-line-before': null,
    'at-rule-empty-line-before': null,
    // BEM: block, block__element, block--modifier
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$',
      { message: 'Expected BEM class name (block__element--modifier)' },
    ],
    'custom-property-pattern': null,
    // The guide writes full six/eight-digit hex so alpha suffixes stay readable.
    'color-hex-length': 'long',
    // clamp() values carry three decimals, letter-spacing four.
    'number-max-precision': 4,
    'value-keyword-case': [
      'lower',
      { camelCaseSvgKeywords: true, ignoreKeywords: [/^srgb$/i], ignoreProperties: [/^--ff/] },
    ],
    // The guide writes oklch() as oklch(0.87 0.14 169.13 / 1).
    'lightness-notation': null,
    'hue-degree-notation': null,
    'alpha-value-notation': null,
    // Blank lines group related tokens.
    'custom-property-empty-line-before': null,
    // Flat BEM selectors make source order meaningful; this rule fights it.
    'no-descending-specificity': null,
    'declaration-no-important': true,
  },
}
