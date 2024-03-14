/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  rootDir: __dirname,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    '<rootDir>/src/*.{js,ts}',
  ],
};

export default config;
