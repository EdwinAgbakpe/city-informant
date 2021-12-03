module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        tsconfigRootDir: __dirname,
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'jest',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'template-curly-spacing': 'off',
    'react/prop-types': [0],
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'react/display-name': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/no-redundant-roles': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'no-restricted-exports': 'off',
    'react/jsx-no-bind': 'off',
    'global-require': 'off',
    'func-names': 'off',
    'no-plusplus': 'off',
    'import/no-unresolved': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
  },
};
