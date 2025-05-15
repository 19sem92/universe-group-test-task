import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts','tsx','js','jsx','json','node'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
};

export default config;
