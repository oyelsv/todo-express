module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: ['airbnb', 'prettier', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  globals: {
    document: true,
    window: true,
    navigator: true,
    it: true,
    jest: true,
    expect: true,
    describe: true,
    console: true,
  },
  ignorePatterns: ['!.*/**', '!.*', '!/*.js', '/build', '/node_modules', '/coverage', '/dist', '/public', '/scripts'],
  rules: {
    radix: 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-var-requires': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-console': 0,
    'comma-dangle': 0,
    'global-require': 0,
    'import/imports-first': 0,
    'import/no-unresolved': 0,
    'object-curly-newline': 0,
    'import/extensions': 0,
    'no-duplicate-imports': 1,
    'no-underscore-dangle': 0,
    'no-case-declarations': 0,
    'class-methods-use-this': 0,
    'no-extra-boolean-cast': 0,
    'import/order': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'no-unused-expressions': 0,
    'no-alert': 0,
    'no-plusplus': 0,
    'arrow-parens': 1,
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    'max-len': ['error', { code: 140 }],
    'implicit-arrow-linebreak': 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        printWidth: 140,
        semi: true,
        useTabs: false,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
  },
};
