
const transformIgnorePatterns = [
  '/dist/',
];
const testPathIgnorePatterns = ['/node_modules/', 'node'];
if (process.env.WORKFLOW === 'true') {
  testPathIgnorePatterns.push('demo\\.test*');
}
module.exports = {
  testURL: 'http://localhost/',
  setupFiles: ['./test/setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'vue', 'md', 'jpg'],
  modulePathIgnorePatterns: ['/_site/'],
  testPathIgnorePatterns: testPathIgnorePatterns,
  transform: {
    '^.+\\.(vue|md)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.svg$': '<rootDir>/node_modules/jest-transform-stub',
  },
  // testRegex: '.*\\.test\\.js$',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(scss|sass|css)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testEnvironment: 'jest-environment-jsdom-fifteen',
  transformIgnorePatterns,
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
