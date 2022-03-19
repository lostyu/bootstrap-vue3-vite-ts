module.exports = {
  moduleFileExtensions: ['js', 'ts', 'vue'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
