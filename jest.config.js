/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  "collectCoverageFrom": ["src/**/*.js", "!**/node_modules/**"],
  "coverageReporters": ["html", "text", "text-summary", "cobertura"],
  "testMatch": ["**/*.test.js"],
  transform: {
    "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    "node_modules/(?!/@vueform/multiselect/dist/multiselect.js/.*)",
  ],
  moduleDirectories: ["js", ".", "node_modules"],

}

