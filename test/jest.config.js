const path = require('path');
const { defaults } = require('jest-config');

module.exports = {
  rootDir: path.resolve(__dirname, '..'),
  collectCoverage: true,
  collectCoverageFrom: [
    '**/packages/**/*.vue'
  ],
  coverageDirectory: '<rootDir>/test/coverage',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(scss|sass|css)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
    "^.+\\.tsx?$": "ts-jest"
  },
  preset: 'ts-jest',
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue'
  ]
};
