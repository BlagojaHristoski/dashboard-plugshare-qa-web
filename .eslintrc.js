module.exports = {
  env: {
    browser: true,
    'codeceptjs/codeceptjs': true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:codeceptjs/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Given: true,
    Then: true,
    When: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'warn',
    'array-bracket-newline': [
      'error',
      'consistent',
    ],
    'array-element-newline': [
      'error',
      'consistent',
    ],
    camelcase: 'error',
    'codeceptjs/no-skipped-tests': 'warn',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'default-case': 'error',
    'max-len': ['error', 250, { ignoreStrings: true }, { ignoreComments: true }],
    'newline-after-var': [
      'error',
      'always',
    ],
    'no-fallthrough': 'error',
    'no-multiple-empty-lines': [
      'error',
      { max: 1, maxEOF: 0 },
    ],
    'no-sequences': 'warn',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: [
          'const',
          'let',
          'var',
        ],
      },
      {
        blankLine: 'any',
        next: [
          'const',
          'let',
          'var',
        ],
        prev: [
          'const',
          'let',
          'var',
        ],
      },
    ],
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'sort-keys': 'warn',
  },
}
