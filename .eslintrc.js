module.exports = {
  extends: '@antfu',
  rules: {
    '@typescript-eslint/brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],
    '@typescript-eslint/consistent-type-definitions': ['off', {}],
    '@typescript-eslint/indent': ['off', {}],
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
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
      },
      groups: [
        'builtin',
        'external',
        'unknown',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      pathGroups: [
        {
          pattern: '/**',
          group: 'parent',
        },
      ],
    }],
    'indent': ['error', 2],
    'multiline-ternary': ['off', {}],
    'vue/no-ref-object-destructure': ['error'],
    'vue/no-setup-props-reactivity-loss': ['error'],
    'vue/singleline-html-element-content-newline': ['off', {}],
    'yield-star-spacing': ['error', 'after'],
    'yml/no-empty-mapping-value': ['off'],
  },
}
