module.exports = {
    moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
      '.*\\.(vue)$': '@vue/vue3-jest',
      '^.+\\.mjs$': 'babel-jest'
    },
    transformIgnorePatterns: [
      '/node_modules/(?!@nuxt/test-utils)'
    ],
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1'
    }
  };
