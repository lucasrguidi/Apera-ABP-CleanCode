export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@ui/(.*)$': '<rootDir>/src/components/ui/$1',
    '^@screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '\\.(svg|jpg|jpeg|png|gif|webp|avif)$': '<rootDir>/__mocks__/fileMock.ts',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  coverageReporters: ['text', 'lcov'],
};
