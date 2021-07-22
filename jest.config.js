module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/tests/config/styleMock.js"
  }
}
