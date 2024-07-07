import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|css|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/test/mocks/svg.ts',
    '\\.png$': '<rootDir>/test/mocks/png.ts',
    '^entities/(.*)$': '<rootDir>/src/entities/$1',
    '^features/(.*)$': '<rootDir>/src/features/$1',
    '^shared/(.*)$': '<rootDir>/src/shared/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^widgets/(.*)$': '<rootDir>/src/widgets/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    __MODE__: 'production',
  },
};

export default config;
