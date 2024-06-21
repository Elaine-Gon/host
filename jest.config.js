module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^host/(.*)$': '<rootDir>/src/components/$1' // Ajuste o caminho conforme necessário
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
