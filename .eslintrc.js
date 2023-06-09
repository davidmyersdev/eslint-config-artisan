module.exports = {
  extends: '@antfu',
  rules: {
    '@typescript-eslint/brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    '@typescript-eslint/consistent-type-definitions': ['off', {}],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
      },
      singleline: {
        delimiter: 'comma',
      },
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    '@typescript-eslint/no-use-before-define': ['off', {}],
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'antfu/if-newline': ['off', {}],
    'antfu/top-level-function': ['off', {}],
    'arrow-parens': ['off', {}],
    'curly': ['off', {}],
  },
}
