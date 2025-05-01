module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // Set to jsdom for React component testing
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    globals: {
      'ts-jest': {
        isolatedModules: true,
      },
    },
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // This matches any .test.tsx or .test.ts files
  };