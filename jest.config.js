module.exports = {
  transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  testTimeout: 30000,
};