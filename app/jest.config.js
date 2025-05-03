module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // ← add this line
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '^~/(.*)$': '<rootDir>/app/$1', // fix for "~/pages/..." resolution
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/.react-router/types/'
  ],
};
