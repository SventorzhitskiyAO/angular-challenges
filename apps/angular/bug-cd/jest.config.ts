/* eslint-disable */
export default {
  displayName: 'angular-bug-cd',
  preset: '../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/subscription-setup.ts'],
  coverageDirectory: '../../../coverage/apps/angular/bug-cd',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
