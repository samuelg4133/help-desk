import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/@types/**/*.ts',
    '!src/**/config/*.ts',
    '!src/shared/infra/**/*.ts',
    '!src/shared/core/infra/**/*.ts',
    '!src/**/mappers/*.ts',
    '!src/**/errors/*.ts',
  ],
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src',
  }),
  preset: 'ts-jest',
};
