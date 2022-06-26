module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-multi-spaces': ['error'],
    'no-multi-str': ['error'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
  },
};
