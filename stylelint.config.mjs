export default {
  extends: 'stylelint-config-standard',
  overrides: [
    {
      customSyntax: 'postcss-styled-syntax',
      files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.tsx'],
    },
  ],
  rules: {
    'alpha-value-notation': null,
    'custom-property-pattern': null,
    'media-feature-range-notation': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'string-no-newline': null, // not compatible with prettier
    'value-keyword-case': null,
  },
};
