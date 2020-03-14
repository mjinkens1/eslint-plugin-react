// Configs
const react = require('@itemizecorp/eslint-config/react');
const reactNative = require('@itemizecorp/eslint-config/react-native');

// Rules
const noUselessComputedProperties = require('./rules/no-useless-computed-properties');
const preferEarlyReturn = require('./rules/prefer-early-return');
const reactNoMultipleRenderMethods = require('./rules/react-no-multiple-render-methods');
const restrictFullImport = require('./rules/restrict-full-import');

module.exports = {
  configs: {
    web: react,
    'react-native': reactNative,
  },
  rules: {
    'no-useless-computed-properties': noUselessComputedProperties,
    'prefer-early-return': preferEarlyReturn,
    'react-no-multiple-render-methods': reactNoMultipleRenderMethods,
    'restrict-full-import': restrictFullImport,
  },
};
