module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'no-console': [2, { allow: ['warn', 'error', 'info'] }],
    'no-trailing-spaces': 'error',
    'comma-dangle': 'error'
  },
};
