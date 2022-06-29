/* eslint-disable @typescript-eslint/naming-convention */
const JEST_CONFIG = {
  displayName: 'sample-api-apps-federation-user',
  preset: '../../../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../../../coverage/apps/sample/back/apps/federation/user',
};
export default JEST_CONFIG;
