const customRules = require('./config/eslint/custom-rules.cjs');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'boundaries'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    '!.*',
    'node_modules',
    'coverage',
    'dist',
    'config/eslint',
    'commitlint.config.cjs',
    '.eslintrc.cjs',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
    'boundaries/include': ['src/**/*'],
    'boundaries/elements': [
      {
        type: 'app',
        pattern: 'app',
      },
      {
        type: 'pages',
        pattern: 'src/pages/*',
        capture: ['page'],
      },
      {
        type: 'widgets',
        pattern: 'widgets/*',
        capture: ['widget'],
      },
      {
        type: 'features',
        pattern: 'features/*',
        capture: ['feature'],
      },
      {
        type: 'entities',
        pattern: 'entities/*',
        capture: ['entity'],
      },
      {
        type: 'shared',
        pattern: 'shared/*',
        capture: ['segment'],
      },
    ],
  },
  rules: {
    ...customRules,
  },
  overrides: [
    {
      files: ['**/slice.ts'],
      rules: {
        'no-param-reassign': [
          'error',
          {
            props: false,
          },
        ],
      },
    },
  ],
};
