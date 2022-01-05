/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['dist', 'node_modules'],
    testMatch: [
        '<rootDir>/__tests__/**/*.test.ts'
    ],
    transform: {
        '\\.ts$': 'esbuild-runner/jest',
    },
};