module.exports = {
  ...require('../../../../../../tools/eslint/eslint-nest'),
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
