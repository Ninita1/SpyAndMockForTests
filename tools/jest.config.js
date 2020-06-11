module.exports = {
  rootDir: '../',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/tools/jest-transformer.js'
  },
  setupFilesAfterEnv: [
    '<rootDir>/tools/setupTests.js'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  roots: [
    '<rootDir>/src/'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  collectCoverage: false,
  coverageDirectory: 'output/coverage',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
  ],
  coverageReporters: [
    'text',
    'html'
  ],
  reporters: [
    'default'
  ]
};
